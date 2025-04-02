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
 * @interface PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest
 */
export interface PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest(value: object): value is PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest {
    return true;
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequestFromJSON(json: any): PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest {
    return PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequestToJSON(json: any): PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest {
    return PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

