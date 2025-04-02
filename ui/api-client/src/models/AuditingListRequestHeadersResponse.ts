/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuditingListRequestHeadersResponse
 */
export interface AuditingListRequestHeadersResponse {
    /**
     * 
     * @type {object}
     * @memberof AuditingListRequestHeadersResponse
     */
    headers?: object;
}

/**
 * Check if a given object implements the AuditingListRequestHeadersResponse interface.
 */
export function instanceOfAuditingListRequestHeadersResponse(value: object): value is AuditingListRequestHeadersResponse {
    return true;
}

export function AuditingListRequestHeadersResponseFromJSON(json: any): AuditingListRequestHeadersResponse {
    return AuditingListRequestHeadersResponseFromJSONTyped(json, false);
}

export function AuditingListRequestHeadersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditingListRequestHeadersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'headers': json['headers'] == null ? undefined : json['headers'],
    };
}

export function AuditingListRequestHeadersResponseToJSON(json: any): AuditingListRequestHeadersResponse {
    return AuditingListRequestHeadersResponseToJSONTyped(json, false);
}

export function AuditingListRequestHeadersResponseToJSONTyped(value?: AuditingListRequestHeadersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'headers': value['headers'],
    };
}

