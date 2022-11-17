/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const HttpStatusCode = {
    NUMBER_100: 100,
    NUMBER_101: 101,
    NUMBER_102: 102,
    NUMBER_103: 103,
    NUMBER_200: 200,
    NUMBER_201: 201,
    NUMBER_202: 202,
    NUMBER_203: 203,
    NUMBER_204: 204,
    NUMBER_205: 205,
    NUMBER_206: 206,
    NUMBER_207: 207,
    NUMBER_208: 208,
    NUMBER_226: 226,
    NUMBER_300: 300,
    NUMBER_301: 301,
    NUMBER_302: 302,
    NUMBER_303: 303,
    NUMBER_304: 304,
    NUMBER_305: 305,
    NUMBER_306: 306,
    NUMBER_307: 307,
    NUMBER_308: 308,
    NUMBER_400: 400,
    NUMBER_401: 401,
    NUMBER_402: 402,
    NUMBER_403: 403,
    NUMBER_404: 404,
    NUMBER_405: 405,
    NUMBER_406: 406,
    NUMBER_407: 407,
    NUMBER_408: 408,
    NUMBER_409: 409,
    NUMBER_410: 410,
    NUMBER_411: 411,
    NUMBER_412: 412,
    NUMBER_413: 413,
    NUMBER_414: 414,
    NUMBER_415: 415,
    NUMBER_416: 416,
    NUMBER_417: 417,
    NUMBER_421: 421,
    NUMBER_422: 422,
    NUMBER_423: 423,
    NUMBER_424: 424,
    NUMBER_426: 426,
    NUMBER_428: 428,
    NUMBER_429: 429,
    NUMBER_431: 431,
    NUMBER_451: 451,
    NUMBER_500: 500,
    NUMBER_501: 501,
    NUMBER_502: 502,
    NUMBER_503: 503,
    NUMBER_504: 504,
    NUMBER_505: 505,
    NUMBER_506: 506,
    NUMBER_507: 507,
    NUMBER_508: 508,
    NUMBER_510: 510,
    NUMBER_511: 511
} as const;
export type HttpStatusCode = typeof HttpStatusCode[keyof typeof HttpStatusCode];


export function HttpStatusCodeFromJSON(json: any): HttpStatusCode {
    return HttpStatusCodeFromJSONTyped(json, false);
}

export function HttpStatusCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HttpStatusCode {
    return json as HttpStatusCode;
}

export function HttpStatusCodeToJSON(value?: HttpStatusCode | null): any {
    return value as any;
}

