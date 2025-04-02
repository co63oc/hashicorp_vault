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
 * @interface PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
 */
export interface PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest interface.
 */
export function instanceOfPkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest(value: object): value is PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    return true;
}

export function PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSON(json: any): PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    return PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(json, false);
}

export function PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSON(json: any): PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    return PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(json, false);
}

export function PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(value?: PkiWriteExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

