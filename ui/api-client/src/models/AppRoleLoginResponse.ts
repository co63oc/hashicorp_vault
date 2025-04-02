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
 * @interface AppRoleLoginResponse
 */
export interface AppRoleLoginResponse {
    /**
     * 
     * @type {string}
     * @memberof AppRoleLoginResponse
     */
    role?: string;
}

/**
 * Check if a given object implements the AppRoleLoginResponse interface.
 */
export function instanceOfAppRoleLoginResponse(value: object): value is AppRoleLoginResponse {
    return true;
}

export function AppRoleLoginResponseFromJSON(json: any): AppRoleLoginResponse {
    return AppRoleLoginResponseFromJSONTyped(json, false);
}

export function AppRoleLoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleLoginResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function AppRoleLoginResponseToJSON(json: any): AppRoleLoginResponse {
    return AppRoleLoginResponseToJSONTyped(json, false);
}

export function AppRoleLoginResponseToJSONTyped(value?: AppRoleLoginResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'role': value['role'],
    };
}

