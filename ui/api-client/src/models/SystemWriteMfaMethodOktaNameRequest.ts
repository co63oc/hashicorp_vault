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
 * @interface SystemWriteMfaMethodOktaNameRequest
 */
export interface SystemWriteMfaMethodOktaNameRequest {
    /**
     * Okta API key.
     * @type {string}
     * @memberof SystemWriteMfaMethodOktaNameRequest
     */
    apiToken?: string;
    /**
     * The base domain to use for the Okta API. When not specified in the configuration, "okta.com" is used.
     * @type {string}
     * @memberof SystemWriteMfaMethodOktaNameRequest
     */
    baseUrl?: string;
    /**
     * The mount to tie this method to for use in automatic mappings. The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.
     * @type {string}
     * @memberof SystemWriteMfaMethodOktaNameRequest
     */
    mountAccessor?: string;
    /**
     * Name of the organization to be used in the Okta API.
     * @type {string}
     * @memberof SystemWriteMfaMethodOktaNameRequest
     */
    orgName?: string;
    /**
     * If true, the username will only match the primary email for the account. Defaults to false.
     * @type {boolean}
     * @memberof SystemWriteMfaMethodOktaNameRequest
     */
    primaryEmail?: boolean;
    /**
     * (DEPRECATED) Use base_url instead.
     * @type {boolean}
     * @memberof SystemWriteMfaMethodOktaNameRequest
     */
    production?: boolean;
    /**
     * A format string for mapping Identity names to MFA method names. Values to subtitute should be placed in {{}}. For example, "{{alias.name}}@example.com". Currently-supported mappings: alias.name: The name returned by the mount configured via the mount_accessor parameter If blank, the Alias's name field will be used as-is.
     * @type {string}
     * @memberof SystemWriteMfaMethodOktaNameRequest
     */
    usernameFormat?: string;
}

/**
 * Check if a given object implements the SystemWriteMfaMethodOktaNameRequest interface.
 */
export function instanceOfSystemWriteMfaMethodOktaNameRequest(value: object): value is SystemWriteMfaMethodOktaNameRequest {
    return true;
}

export function SystemWriteMfaMethodOktaNameRequestFromJSON(json: any): SystemWriteMfaMethodOktaNameRequest {
    return SystemWriteMfaMethodOktaNameRequestFromJSONTyped(json, false);
}

export function SystemWriteMfaMethodOktaNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteMfaMethodOktaNameRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'apiToken': json['api_token'] == null ? undefined : json['api_token'],
        'baseUrl': json['base_url'] == null ? undefined : json['base_url'],
        'mountAccessor': json['mount_accessor'] == null ? undefined : json['mount_accessor'],
        'orgName': json['org_name'] == null ? undefined : json['org_name'],
        'primaryEmail': json['primary_email'] == null ? undefined : json['primary_email'],
        'production': json['production'] == null ? undefined : json['production'],
        'usernameFormat': json['username_format'] == null ? undefined : json['username_format'],
    };
}

export function SystemWriteMfaMethodOktaNameRequestToJSON(json: any): SystemWriteMfaMethodOktaNameRequest {
    return SystemWriteMfaMethodOktaNameRequestToJSONTyped(json, false);
}

export function SystemWriteMfaMethodOktaNameRequestToJSONTyped(value?: SystemWriteMfaMethodOktaNameRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'api_token': value['apiToken'],
        'base_url': value['baseUrl'],
        'mount_accessor': value['mountAccessor'],
        'org_name': value['orgName'],
        'primary_email': value['primaryEmail'],
        'production': value['production'],
        'username_format': value['usernameFormat'],
    };
}

