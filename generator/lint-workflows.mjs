#!/usr/bin/env node
/**
 * lint-workflows.mjs - parse every GitHub Actions workflow in this repo
 *
 * Exists because .github/workflows/publish.yml sat in this repository for over
 * two years as invalid YAML. GitHub does not report a broken workflow anywhere a
 * person would look - it simply never appears in the Actions tab - so nobody
 * noticed the release workflow had never run, and every publish was done by hand.
 * That is the most likely reason the npm package and this repository drifted
 * apart.
 *
 * A parse is enough to catch that class of mistake, and it costs nothing.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKFLOWS_DIR = path.join(REPO_ROOT, '.github', 'workflows');

if (!fs.existsSync(WORKFLOWS_DIR)) {
  console.log('No .github/workflows directory; nothing to lint.');
  process.exit(0);
}

const files = fs.readdirSync(WORKFLOWS_DIR).filter((f) => f.endsWith('.yml') || f.endsWith('.yaml'));

let failed = 0;
for (const file of files) {
  const fullPath = path.join(WORKFLOWS_DIR, file);
  try {
    const doc = YAML.parse(fs.readFileSync(fullPath, 'utf8'));

    // A workflow that parses but has no jobs will also silently never run.
    if (!doc || typeof doc !== 'object') throw new Error('file does not parse to a mapping');
    if (!doc.jobs || !Object.keys(doc.jobs).length) throw new Error('no jobs defined');
    // `on:` is parsed by YAML 1.1 readers as the boolean true; accept either.
    if (doc.on === undefined && doc[true] === undefined) throw new Error('no `on:` trigger defined');

    console.log(`  ok      ${file}`);
  } catch (error) {
    failed++;
    console.error(`  FAILED  ${file}: ${error.message.split('\n')[0]}`);
  }
}

if (failed) {
  console.error(`\n${failed} workflow file(s) would be ignored by GitHub.`);
  process.exit(1);
}

console.log(`\n${files.length} workflow file(s) parse cleanly.`);
