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
 * Check if a given object implements the SystemWriteSyncDestinationsGcpSmNameRequest interface.
 */
export function instanceOfSystemWriteSyncDestinationsGcpSmNameRequest(value) {
    return true;
}
export function SystemWriteSyncDestinationsGcpSmNameRequestFromJSON(json) {
    return SystemWriteSyncDestinationsGcpSmNameRequestFromJSONTyped(json, false);
}
export function SystemWriteSyncDestinationsGcpSmNameRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'allowedIpv4Addresses': json['allowed_ipv4_addresses'] == null ? undefined : json['allowed_ipv4_addresses'],
        'allowedIpv6Addresses': json['allowed_ipv6_addresses'] == null ? undefined : json['allowed_ipv6_addresses'],
        'allowedPorts': json['allowed_ports'] == null ? undefined : json['allowed_ports'],
        'credentials': json['credentials'] == null ? undefined : json['credentials'],
        'customTags': json['custom_tags'] == null ? undefined : json['custom_tags'],
        'disableStrictNetworking': json['disable_strict_networking'] == null ? undefined : json['disable_strict_networking'],
        'globalKmsKey': json['global_kms_key'] == null ? undefined : json['global_kms_key'],
        'granularity': json['granularity'] == null ? undefined : json['granularity'],
        'locationalKmsKeys': json['locational_kms_keys'] == null ? undefined : json['locational_kms_keys'],
        'projectId': json['project_id'] == null ? undefined : json['project_id'],
        'purge': json['purge'] == null ? undefined : json['purge'],
        'replicationLocations': json['replication_locations'] == null ? undefined : json['replication_locations'],
        'secretNameTemplate': json['secret_name_template'] == null ? undefined : json['secret_name_template'],
        'tagsToRemove': json['tags_to_remove'] == null ? undefined : json['tags_to_remove'],
    };
}
export function SystemWriteSyncDestinationsGcpSmNameRequestToJSON(json) {
    return SystemWriteSyncDestinationsGcpSmNameRequestToJSONTyped(json, false);
}
export function SystemWriteSyncDestinationsGcpSmNameRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'allowed_ipv4_addresses': value['allowedIpv4Addresses'],
        'allowed_ipv6_addresses': value['allowedIpv6Addresses'],
        'allowed_ports': value['allowedPorts'],
        'credentials': value['credentials'],
        'custom_tags': value['customTags'],
        'disable_strict_networking': value['disableStrictNetworking'],
        'global_kms_key': value['globalKmsKey'],
        'granularity': value['granularity'],
        'locational_kms_keys': value['locationalKmsKeys'],
        'project_id': value['projectId'],
        'purge': value['purge'],
        'replication_locations': value['replicationLocations'],
        'secret_name_template': value['secretNameTemplate'],
        'tags_to_remove': value['tagsToRemove'],
    };
}
