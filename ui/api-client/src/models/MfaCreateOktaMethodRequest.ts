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
 * @interface MfaCreateOktaMethodRequest
 */
export interface MfaCreateOktaMethodRequest {
    /**
     * Okta API key.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    apiToken?: string;
    /**
     * The base domain to use for the Okta API. When not specified in the configuration, "okta.com" is used.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    baseUrl?: string;
    /**
     * The unique name identifier for this MFA method.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    methodName?: string;
    /**
     * Name of the organization to be used in the Okta API.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    orgName?: string;
    /**
     * If true, the username will only match the primary email for the account. Defaults to false.
     * @type {boolean}
     * @memberof MfaCreateOktaMethodRequest
     */
    primaryEmail?: boolean;
    /**
     * (DEPRECATED) Use base_url instead.
     * @type {boolean}
     * @memberof MfaCreateOktaMethodRequest
     */
    production?: boolean;
    /**
     * A template string for mapping Identity names to MFA method names. Values to substitute should be placed in {{}}. For example, "{{entity.name}}@example.com". If blank, the Entity's name field will be used as-is.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    usernameFormat?: string;
}

/**
 * Check if a given object implements the MfaCreateOktaMethodRequest interface.
 */
export function instanceOfMfaCreateOktaMethodRequest(value: object): value is MfaCreateOktaMethodRequest {
    return true;
}

export function MfaCreateOktaMethodRequestFromJSON(json: any): MfaCreateOktaMethodRequest {
    return MfaCreateOktaMethodRequestFromJSONTyped(json, false);
}

export function MfaCreateOktaMethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MfaCreateOktaMethodRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'apiToken': json['api_token'] == null ? undefined : json['api_token'],
        'baseUrl': json['base_url'] == null ? undefined : json['base_url'],
        'methodName': json['method_name'] == null ? undefined : json['method_name'],
        'orgName': json['org_name'] == null ? undefined : json['org_name'],
        'primaryEmail': json['primary_email'] == null ? undefined : json['primary_email'],
        'production': json['production'] == null ? undefined : json['production'],
        'usernameFormat': json['username_format'] == null ? undefined : json['username_format'],
    };
}

export function MfaCreateOktaMethodRequestToJSON(json: any): MfaCreateOktaMethodRequest {
    return MfaCreateOktaMethodRequestToJSONTyped(json, false);
}

export function MfaCreateOktaMethodRequestToJSONTyped(value?: MfaCreateOktaMethodRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'api_token': value['apiToken'],
        'base_url': value['baseUrl'],
        'method_name': value['methodName'],
        'org_name': value['orgName'],
        'primary_email': value['primaryEmail'],
        'production': value['production'],
        'username_format': value['usernameFormat'],
    };
}

