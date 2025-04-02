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
 * @interface SystemPatchSyncDestinationsGcpSmNameResponse
 */
export interface SystemPatchSyncDestinationsGcpSmNameResponse {
    /**
     * List of key value pairs of information necessary to connect with the external system.
     * @type {object}
     * @memberof SystemPatchSyncDestinationsGcpSmNameResponse
     */
    connectionDetails?: object;
    /**
     * Name of this secrets store.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsGcpSmNameResponse
     */
    name?: string;
    /**
     * Type of this secrets store.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsGcpSmNameResponse
     */
    type?: string;
}

/**
 * Check if a given object implements the SystemPatchSyncDestinationsGcpSmNameResponse interface.
 */
export function instanceOfSystemPatchSyncDestinationsGcpSmNameResponse(value: object): value is SystemPatchSyncDestinationsGcpSmNameResponse {
    return true;
}

export function SystemPatchSyncDestinationsGcpSmNameResponseFromJSON(json: any): SystemPatchSyncDestinationsGcpSmNameResponse {
    return SystemPatchSyncDestinationsGcpSmNameResponseFromJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsGcpSmNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemPatchSyncDestinationsGcpSmNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'connectionDetails': json['connection_details'] == null ? undefined : json['connection_details'],
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function SystemPatchSyncDestinationsGcpSmNameResponseToJSON(json: any): SystemPatchSyncDestinationsGcpSmNameResponse {
    return SystemPatchSyncDestinationsGcpSmNameResponseToJSONTyped(json, false);
}

export function SystemPatchSyncDestinationsGcpSmNameResponseToJSONTyped(value?: SystemPatchSyncDestinationsGcpSmNameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'connection_details': value['connectionDetails'],
        'name': value['name'],
        'type': value['type'],
    };
}

