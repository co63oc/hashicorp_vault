"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSubscriptionsWriteEventsSubscriptionsResponse = instanceOfSubscriptionsWriteEventsSubscriptionsResponse;
exports.SubscriptionsWriteEventsSubscriptionsResponseFromJSON = SubscriptionsWriteEventsSubscriptionsResponseFromJSON;
exports.SubscriptionsWriteEventsSubscriptionsResponseFromJSONTyped = SubscriptionsWriteEventsSubscriptionsResponseFromJSONTyped;
exports.SubscriptionsWriteEventsSubscriptionsResponseToJSON = SubscriptionsWriteEventsSubscriptionsResponseToJSON;
exports.SubscriptionsWriteEventsSubscriptionsResponseToJSONTyped = SubscriptionsWriteEventsSubscriptionsResponseToJSONTyped;
/**
 * Check if a given object implements the SubscriptionsWriteEventsSubscriptionsResponse interface.
 */
function instanceOfSubscriptionsWriteEventsSubscriptionsResponse(value) {
    return true;
}
function SubscriptionsWriteEventsSubscriptionsResponseFromJSON(json) {
    return SubscriptionsWriteEventsSubscriptionsResponseFromJSONTyped(json, false);
}
function SubscriptionsWriteEventsSubscriptionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'plugin': json['plugin'] == null ? undefined : json['plugin'],
    };
}
function SubscriptionsWriteEventsSubscriptionsResponseToJSON(json) {
    return SubscriptionsWriteEventsSubscriptionsResponseToJSONTyped(json, false);
}
function SubscriptionsWriteEventsSubscriptionsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'plugin': value['plugin'],
    };
}
