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
 * @interface KvV2ConfigureRequest
 */
export interface KvV2ConfigureRequest {
    /**
     * If true, the backend will require the cas parameter to be set for each write
     * @type {boolean}
     * @memberof KvV2ConfigureRequest
     */
    casRequired?: boolean;
    /**
     * If set, the length of time before a version is deleted. A negative duration disables the use of delete_version_after on all keys. A zero duration clears the current setting. Accepts a Go duration format string.
     * @type {string}
     * @memberof KvV2ConfigureRequest
     */
    deleteVersionAfter?: string;
    /**
     * The number of versions to keep for each key. Defaults to 10
     * @type {number}
     * @memberof KvV2ConfigureRequest
     */
    maxVersions?: number;
}

/**
 * Check if a given object implements the KvV2ConfigureRequest interface.
 */
export function instanceOfKvV2ConfigureRequest(value: object): value is KvV2ConfigureRequest {
    return true;
}

export function KvV2ConfigureRequestFromJSON(json: any): KvV2ConfigureRequest {
    return KvV2ConfigureRequestFromJSONTyped(json, false);
}

export function KvV2ConfigureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KvV2ConfigureRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'casRequired': json['cas_required'] == null ? undefined : json['cas_required'],
        'deleteVersionAfter': json['delete_version_after'] == null ? undefined : json['delete_version_after'],
        'maxVersions': json['max_versions'] == null ? undefined : json['max_versions'],
    };
}

export function KvV2ConfigureRequestToJSON(json: any): KvV2ConfigureRequest {
    return KvV2ConfigureRequestToJSONTyped(json, false);
}

export function KvV2ConfigureRequestToJSONTyped(value?: KvV2ConfigureRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cas_required': value['casRequired'],
        'delete_version_after': value['deleteVersionAfter'],
        'max_versions': value['maxVersions'],
    };
}

