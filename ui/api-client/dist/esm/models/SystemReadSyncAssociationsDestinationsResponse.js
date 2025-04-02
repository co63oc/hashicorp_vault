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
/**
 * Check if a given object implements the SystemReadSyncAssociationsDestinationsResponse interface.
 */
export function instanceOfSystemReadSyncAssociationsDestinationsResponse(value) {
    return true;
}
export function SystemReadSyncAssociationsDestinationsResponseFromJSON(json) {
    return SystemReadSyncAssociationsDestinationsResponseFromJSONTyped(json, false);
}
export function SystemReadSyncAssociationsDestinationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'associatedDestinations': json['associated_destinations'] == null ? undefined : json['associated_destinations'],
    };
}
export function SystemReadSyncAssociationsDestinationsResponseToJSON(json) {
    return SystemReadSyncAssociationsDestinationsResponseToJSONTyped(json, false);
}
export function SystemReadSyncAssociationsDestinationsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'associated_destinations': value['associatedDestinations'],
    };
}
