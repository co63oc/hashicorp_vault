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
 * @interface OidcWriteRoleRequest
 */
export interface OidcWriteRoleRequest {
    /**
     * Optional client_id
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    clientId?: string;
    /**
     * The OIDC key to use for generating tokens. The specified key must already exist.
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    key: string;
    /**
     * The template string to use for generating tokens. This may be in string-ified JSON or base64 format.
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    template?: string;
    /**
     * TTL of the tokens generated against the role.
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    ttl?: string;
}

/**
 * Check if a given object implements the OidcWriteRoleRequest interface.
 */
export function instanceOfOidcWriteRoleRequest(value: object): value is OidcWriteRoleRequest {
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function OidcWriteRoleRequestFromJSON(json: any): OidcWriteRoleRequest {
    return OidcWriteRoleRequestFromJSONTyped(json, false);
}

export function OidcWriteRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OidcWriteRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'clientId': json['client_id'] == null ? undefined : json['client_id'],
        'key': json['key'],
        'template': json['template'] == null ? undefined : json['template'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function OidcWriteRoleRequestToJSON(json: any): OidcWriteRoleRequest {
    return OidcWriteRoleRequestToJSONTyped(json, false);
}

export function OidcWriteRoleRequestToJSONTyped(value?: OidcWriteRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'client_id': value['clientId'],
        'key': value['key'],
        'template': value['template'],
        'ttl': value['ttl'],
    };
}

