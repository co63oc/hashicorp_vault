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
exports.instanceOfPkiIssuerReadUnifiedCrlDeltaDerResponse = instanceOfPkiIssuerReadUnifiedCrlDeltaDerResponse;
exports.PkiIssuerReadUnifiedCrlDeltaDerResponseFromJSON = PkiIssuerReadUnifiedCrlDeltaDerResponseFromJSON;
exports.PkiIssuerReadUnifiedCrlDeltaDerResponseFromJSONTyped = PkiIssuerReadUnifiedCrlDeltaDerResponseFromJSONTyped;
exports.PkiIssuerReadUnifiedCrlDeltaDerResponseToJSON = PkiIssuerReadUnifiedCrlDeltaDerResponseToJSON;
exports.PkiIssuerReadUnifiedCrlDeltaDerResponseToJSONTyped = PkiIssuerReadUnifiedCrlDeltaDerResponseToJSONTyped;
/**
 * Check if a given object implements the PkiIssuerReadUnifiedCrlDeltaDerResponse interface.
 */
function instanceOfPkiIssuerReadUnifiedCrlDeltaDerResponse(value) {
    return true;
}
function PkiIssuerReadUnifiedCrlDeltaDerResponseFromJSON(json) {
    return PkiIssuerReadUnifiedCrlDeltaDerResponseFromJSONTyped(json, false);
}
function PkiIssuerReadUnifiedCrlDeltaDerResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'crl': json['crl'] == null ? undefined : json['crl'],
    };
}
function PkiIssuerReadUnifiedCrlDeltaDerResponseToJSON(json) {
    return PkiIssuerReadUnifiedCrlDeltaDerResponseToJSONTyped(json, false);
}
function PkiIssuerReadUnifiedCrlDeltaDerResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'crl': value['crl'],
    };
}
