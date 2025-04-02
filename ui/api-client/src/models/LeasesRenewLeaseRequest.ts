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
 * @interface LeasesRenewLeaseRequest
 */
export interface LeasesRenewLeaseRequest {
    /**
     * The desired increment in seconds to the lease
     * @type {string}
     * @memberof LeasesRenewLeaseRequest
     */
    increment?: string;
    /**
     * The lease identifier to renew. This is included with a lease.
     * @type {string}
     * @memberof LeasesRenewLeaseRequest
     */
    leaseId?: string;
}

/**
 * Check if a given object implements the LeasesRenewLeaseRequest interface.
 */
export function instanceOfLeasesRenewLeaseRequest(value: object): value is LeasesRenewLeaseRequest {
    return true;
}

export function LeasesRenewLeaseRequestFromJSON(json: any): LeasesRenewLeaseRequest {
    return LeasesRenewLeaseRequestFromJSONTyped(json, false);
}

export function LeasesRenewLeaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeasesRenewLeaseRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'increment': json['increment'] == null ? undefined : json['increment'],
        'leaseId': json['lease_id'] == null ? undefined : json['lease_id'],
    };
}

export function LeasesRenewLeaseRequestToJSON(json: any): LeasesRenewLeaseRequest {
    return LeasesRenewLeaseRequestToJSONTyped(json, false);
}

export function LeasesRenewLeaseRequestToJSONTyped(value?: LeasesRenewLeaseRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'increment': value['increment'],
        'lease_id': value['leaseId'],
    };
}

