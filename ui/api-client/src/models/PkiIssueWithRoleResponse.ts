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
 * @interface PkiIssueWithRoleResponse
 */
export interface PkiIssueWithRoleResponse {
    /**
     * Certificate Chain
     * @type {Array<string>}
     * @memberof PkiIssueWithRoleResponse
     */
    caChain?: Array<string>;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiIssueWithRoleResponse
     */
    certificate?: string;
    /**
     * Time of expiration
     * @type {number}
     * @memberof PkiIssueWithRoleResponse
     */
    expiration?: number;
    /**
     * Issuing Certificate Authority
     * @type {string}
     * @memberof PkiIssueWithRoleResponse
     */
    issuingCa?: string;
    /**
     * Private key
     * @type {string}
     * @memberof PkiIssueWithRoleResponse
     */
    privateKey?: string;
    /**
     * Private key type
     * @type {string}
     * @memberof PkiIssueWithRoleResponse
     */
    privateKeyType?: string;
    /**
     * Serial Number
     * @type {string}
     * @memberof PkiIssueWithRoleResponse
     */
    serialNumber?: string;
}

/**
 * Check if a given object implements the PkiIssueWithRoleResponse interface.
 */
export function instanceOfPkiIssueWithRoleResponse(value: object): value is PkiIssueWithRoleResponse {
    return true;
}

export function PkiIssueWithRoleResponseFromJSON(json: any): PkiIssueWithRoleResponse {
    return PkiIssueWithRoleResponseFromJSONTyped(json, false);
}

export function PkiIssueWithRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiIssueWithRoleResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'caChain': json['ca_chain'] == null ? undefined : json['ca_chain'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'expiration': json['expiration'] == null ? undefined : json['expiration'],
        'issuingCa': json['issuing_ca'] == null ? undefined : json['issuing_ca'],
        'privateKey': json['private_key'] == null ? undefined : json['private_key'],
        'privateKeyType': json['private_key_type'] == null ? undefined : json['private_key_type'],
        'serialNumber': json['serial_number'] == null ? undefined : json['serial_number'],
    };
}

export function PkiIssueWithRoleResponseToJSON(json: any): PkiIssueWithRoleResponse {
    return PkiIssueWithRoleResponseToJSONTyped(json, false);
}

export function PkiIssueWithRoleResponseToJSONTyped(value?: PkiIssueWithRoleResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca_chain': value['caChain'],
        'certificate': value['certificate'],
        'expiration': value['expiration'],
        'issuing_ca': value['issuingCa'],
        'private_key': value['privateKey'],
        'private_key_type': value['privateKeyType'],
        'serial_number': value['serialNumber'],
    };
}

