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
 * @interface MfaUpdateDuoMethodRequest
 */
export interface MfaUpdateDuoMethodRequest {
    /**
     * API host name for Duo.
     * @type {string}
     * @memberof MfaUpdateDuoMethodRequest
     */
    apiHostname?: string;
    /**
     * Integration key for Duo.
     * @type {string}
     * @memberof MfaUpdateDuoMethodRequest
     */
    integrationKey?: string;
    /**
     * The unique name identifier for this MFA method.
     * @type {string}
     * @memberof MfaUpdateDuoMethodRequest
     */
    methodName?: string;
    /**
     * Push information for Duo.
     * @type {string}
     * @memberof MfaUpdateDuoMethodRequest
     */
    pushInfo?: string;
    /**
     * Secret key for Duo.
     * @type {string}
     * @memberof MfaUpdateDuoMethodRequest
     */
    secretKey?: string;
    /**
     * If true, the user is reminded to use the passcode upon MFA validation. This option does not enforce using the passcode. Defaults to false.
     * @type {boolean}
     * @memberof MfaUpdateDuoMethodRequest
     */
    usePasscode?: boolean;
    /**
     * A template string for mapping Identity names to MFA method names. Values to subtitute should be placed in {{}}. For example, "{{alias.name}}@example.com". Currently-supported mappings: alias.name: The name returned by the mount configured via the mount_accessor parameter If blank, the Alias's name field will be used as-is.
     * @type {string}
     * @memberof MfaUpdateDuoMethodRequest
     */
    usernameFormat?: string;
}

/**
 * Check if a given object implements the MfaUpdateDuoMethodRequest interface.
 */
export function instanceOfMfaUpdateDuoMethodRequest(value: object): value is MfaUpdateDuoMethodRequest {
    return true;
}

export function MfaUpdateDuoMethodRequestFromJSON(json: any): MfaUpdateDuoMethodRequest {
    return MfaUpdateDuoMethodRequestFromJSONTyped(json, false);
}

export function MfaUpdateDuoMethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MfaUpdateDuoMethodRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'apiHostname': json['api_hostname'] == null ? undefined : json['api_hostname'],
        'integrationKey': json['integration_key'] == null ? undefined : json['integration_key'],
        'methodName': json['method_name'] == null ? undefined : json['method_name'],
        'pushInfo': json['push_info'] == null ? undefined : json['push_info'],
        'secretKey': json['secret_key'] == null ? undefined : json['secret_key'],
        'usePasscode': json['use_passcode'] == null ? undefined : json['use_passcode'],
        'usernameFormat': json['username_format'] == null ? undefined : json['username_format'],
    };
}

export function MfaUpdateDuoMethodRequestToJSON(json: any): MfaUpdateDuoMethodRequest {
    return MfaUpdateDuoMethodRequestToJSONTyped(json, false);
}

export function MfaUpdateDuoMethodRequestToJSONTyped(value?: MfaUpdateDuoMethodRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'api_hostname': value['apiHostname'],
        'integration_key': value['integrationKey'],
        'method_name': value['methodName'],
        'push_info': value['pushInfo'],
        'secret_key': value['secretKey'],
        'use_passcode': value['usePasscode'],
        'username_format': value['usernameFormat'],
    };
}

