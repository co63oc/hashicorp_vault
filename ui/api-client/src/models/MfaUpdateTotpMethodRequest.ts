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
 * @interface MfaUpdateTotpMethodRequest
 */
export interface MfaUpdateTotpMethodRequest {
    /**
     * The hashing algorithm used to generate the TOTP token. Options include SHA1, SHA256 and SHA512.
     * @type {string}
     * @memberof MfaUpdateTotpMethodRequest
     */
    algorithm?: string;
    /**
     * The number of digits in the generated TOTP token. This value can either be 6 or 8.
     * @type {number}
     * @memberof MfaUpdateTotpMethodRequest
     */
    digits?: number;
    /**
     * The name of the key's issuing organization.
     * @type {string}
     * @memberof MfaUpdateTotpMethodRequest
     */
    issuer?: string;
    /**
     * Determines the size in bytes of the generated key.
     * @type {number}
     * @memberof MfaUpdateTotpMethodRequest
     */
    keySize?: number;
    /**
     * Max number of allowed validation attempts.
     * @type {number}
     * @memberof MfaUpdateTotpMethodRequest
     */
    maxValidationAttempts?: number;
    /**
     * The unique name identifier for this MFA method.
     * @type {string}
     * @memberof MfaUpdateTotpMethodRequest
     */
    methodName?: string;
    /**
     * The length of time used to generate a counter for the TOTP token calculation.
     * @type {string}
     * @memberof MfaUpdateTotpMethodRequest
     */
    period?: string;
    /**
     * The pixel size of the generated square QR code.
     * @type {number}
     * @memberof MfaUpdateTotpMethodRequest
     */
    qrSize?: number;
    /**
     * The number of delay periods that are allowed when validating a TOTP token. This value can either be 0 or 1.
     * @type {number}
     * @memberof MfaUpdateTotpMethodRequest
     */
    skew?: number;
}

/**
 * Check if a given object implements the MfaUpdateTotpMethodRequest interface.
 */
export function instanceOfMfaUpdateTotpMethodRequest(value: object): value is MfaUpdateTotpMethodRequest {
    return true;
}

export function MfaUpdateTotpMethodRequestFromJSON(json: any): MfaUpdateTotpMethodRequest {
    return MfaUpdateTotpMethodRequestFromJSONTyped(json, false);
}

export function MfaUpdateTotpMethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MfaUpdateTotpMethodRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'digits': json['digits'] == null ? undefined : json['digits'],
        'issuer': json['issuer'] == null ? undefined : json['issuer'],
        'keySize': json['key_size'] == null ? undefined : json['key_size'],
        'maxValidationAttempts': json['max_validation_attempts'] == null ? undefined : json['max_validation_attempts'],
        'methodName': json['method_name'] == null ? undefined : json['method_name'],
        'period': json['period'] == null ? undefined : json['period'],
        'qrSize': json['qr_size'] == null ? undefined : json['qr_size'],
        'skew': json['skew'] == null ? undefined : json['skew'],
    };
}

export function MfaUpdateTotpMethodRequestToJSON(json: any): MfaUpdateTotpMethodRequest {
    return MfaUpdateTotpMethodRequestToJSONTyped(json, false);
}

export function MfaUpdateTotpMethodRequestToJSONTyped(value?: MfaUpdateTotpMethodRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'algorithm': value['algorithm'],
        'digits': value['digits'],
        'issuer': value['issuer'],
        'key_size': value['keySize'],
        'max_validation_attempts': value['maxValidationAttempts'],
        'method_name': value['methodName'],
        'period': value['period'],
        'qr_size': value['qrSize'],
        'skew': value['skew'],
    };
}

