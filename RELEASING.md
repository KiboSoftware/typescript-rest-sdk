# Refreshing and releasing the SDK

Everything under `src/clients/` is generated. Everything else - `src/client-runtime`,
`src/types`, `src/utilities` - is hand-written and is never touched by the
generator.

## Where the specs come from

Kibo's OpenAPI specs live in [`unified-documentation`](https://github.com/Kibo-UCP/unified-documentation),
which is also what publishes docs.kibocommerce.com. Its `openapi-pipeline/dist_sdk/`
directory holds one spec per client, built from the same processed specs and
editorial overlays as the public API reference, with `operationId`s preserved
because every method name here comes from one.

This repo never talks to Kibo services directly. See that repo's
`openapi-pipeline/README.md` for how the specs are produced.

## Refreshing the clients

The `Refresh SDK from API docs` workflow does this fortnightly and opens a PR
whose body is the drift report. To do it by hand, with `unified-documentation`
checked out next to this repo:

```bash
cd ../unified-documentation && npm ci && npm run spec:refresh-sdk
cd ../typescript-rest-sdk
npm ci
npm run generate            # or: npm run generate -- --specs <dir>
npm run typecheck
npm test
```

`npm run generate -- --client Commerce` regenerates a single client.

Review the drift report from `npm run spec:sdk-drift` in the docs repo before
committing. Additions are safe. Removals break consumers at compile time, and the
report separates the two kinds:

- **Removed by a docs overlay** - the endpoint still exists on the platform, but
  an overlay withholds it from the public docs and Kibo has chosen to let that
  apply to the SDK. Someone should confirm each of these is intended; the fix, if
  not, is to drop the `remove` action from the overlay in the docs repo.
- **Removed upstream** - the endpoint is gone from the service spec entirely.

## Releasing

Run the `Publish to npm` workflow and pick a release type.

Versions are `<major>.<KiboApiVersion>.<patch>` - `2.2530.1` is Kibo API version
1.2530. The workflow's `patch`/`minor`/`major` inputs bump the npm semver; when the
API version changes, set the middle number in `package.json` in the refresh PR.

The first segment is the SDK's own major and moves independently of the API
version. A refresh that removes methods or models breaks consumers at compile
time, so it needs a major bump - otherwise everyone on the previous `^major`
picks it up on their next install. `3.2634.1` was the first of these: the 1.2634
refresh dropped 142 methods and 279 models. Bump it by hand here rather than
using the workflow's `major` input, which would reset the API segment to 0.

Publishing requires `NPMJS_ACCESS_TOKEN`. The scheduled refresh never publishes.

## How generation works

`generator/generate.mjs` runs openapi-generator 6.2.0 with a mix of stock and
custom templates.

- **`generator/templates/`** - Kibo's custom Mustache templates. They add the
  `export namespace xApiParams` request-object types, point each client at the
  shared `src/client-runtime`, and reduce the per-client `runtime.ts` to a
  `basePathTemplate` constant. Until now these lived only in
  `KiboSoftware/sdk-generator-poc`, a separate private repo, which is why only
  its author could regenerate this SDK. They are vendored here now.
- **`generator/config.yaml`** - maps those three templates onto the generator's
  template slots. Models use the stock templates.
- **`api-path.ts`** - written by `generate.mjs`, not by any template. Every
  generated API class imports `basePathTemplate` from it, so a client generated
  without it will not compile. Its value comes from `isHomePod` in the docs
  repo's `sdk-config.json`.

The generator version is pinned. Later majors change the shape of
`typescript-fetch` output, which would rename or retype public API surface, so
upgrading is a deliberate reviewed change rather than a side effect.

`npm run generate -- --check` regenerates and fails if the result differs from
the committed tree - it catches a client that has been hand-edited. The publish
workflow runs it as a warning.

## Compatibility rules

Method names are pinned by `openapi-pipeline/sdk-name-lock.json` in the docs
repo, keyed by `VERB /path`. If a service renames an operationId, the SDK keeps
the name it already publishes and the drift report notes the divergence. Do not
regenerate that lock as part of a routine refresh - it is the record of what
consumers already depend on. See the docs repo README for when it is right to.

Two things the lock cannot protect:

- **Model names**, which have no identity beyond the name itself. The lock
  carries an explicit `schemaRenames` map instead, and the drift report lists
  models that disappeared so a human can decide whether each was a rename.
- **An endpoint that moves to a different path**, which the lock cannot follow.
  The drift report's "Renamed despite the lock" section catches these; it should
  normally be empty.

## Known gaps

- The test suite covers `src/client-runtime` and `src/utilities` only; there are
  no tests over the generated clients. Its four failing suites fail on `main`
  too, from a missing transitive dependency of `node-cache`, and are unrelated to
  generation.
- `getTopLevelDomainForRegion` in `src/utilities/get-api-url.ts` returns
  `mozu.com` for every non-EU region, so US tenants on
  `*.usc1.gcp.kibocommerce.com` can only be reached by setting `apiHost`
  explicitly.
