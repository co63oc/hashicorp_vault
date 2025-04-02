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
 * Check if a given object implements the PkiIssuerSignSelfIssuedRequest interface.
 */
export function instanceOfPkiIssuerSignSelfIssuedRequest(value) {
    return true;
}
export function PkiIssuerSignSelfIssuedRequestFromJSON(json) {
    return PkiIssuerSignSelfIssuedRequestFromJSONTyped(json, false);
}
export function PkiIssuerSignSelfIssuedRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'requireMatchingCertificateAlgorithms': json['require_matching_certificate_algorithms'] == null ? undefined : json['require_matching_certificate_algorithms'],
    };
}
export function PkiIssuerSignSelfIssuedRequestToJSON(json) {
    return PkiIssuerSignSelfIssuedRequestToJSONTyped(json, false);
}
export function PkiIssuerSignSelfIssuedRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'certificate': value['certificate'],
        'require_matching_certificate_algorithms': value['requireMatchingCertificateAlgorithms'],
    };
}
