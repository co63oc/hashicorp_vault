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
 * @interface PkiWriteRolesRoleAcmeAccountKidRequest
 */
export interface PkiWriteRolesRoleAcmeAccountKidRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeAccountKidRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeAccountKidRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeAccountKidRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteRolesRoleAcmeAccountKidRequest interface.
 */
export function instanceOfPkiWriteRolesRoleAcmeAccountKidRequest(value: object): value is PkiWriteRolesRoleAcmeAccountKidRequest {
    return true;
}

export function PkiWriteRolesRoleAcmeAccountKidRequestFromJSON(json: any): PkiWriteRolesRoleAcmeAccountKidRequest {
    return PkiWriteRolesRoleAcmeAccountKidRequestFromJSONTyped(json, false);
}

export function PkiWriteRolesRoleAcmeAccountKidRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteRolesRoleAcmeAccountKidRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteRolesRoleAcmeAccountKidRequestToJSON(json: any): PkiWriteRolesRoleAcmeAccountKidRequest {
    return PkiWriteRolesRoleAcmeAccountKidRequestToJSONTyped(json, false);
}

export function PkiWriteRolesRoleAcmeAccountKidRequestToJSONTyped(value?: PkiWriteRolesRoleAcmeAccountKidRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

