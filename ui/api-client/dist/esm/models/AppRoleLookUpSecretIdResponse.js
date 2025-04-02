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
 * Check if a given object implements the AppRoleLookUpSecretIdResponse interface.
 */
export function instanceOfAppRoleLookUpSecretIdResponse(value) {
    return true;
}
export function AppRoleLookUpSecretIdResponseFromJSON(json) {
    return AppRoleLookUpSecretIdResponseFromJSONTyped(json, false);
}
export function AppRoleLookUpSecretIdResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cidrList': json['cidr_list'] == null ? undefined : json['cidr_list'],
        'creationTime': json['creation_time'] == null ? undefined : (new Date(json['creation_time'])),
        'expirationTime': json['expiration_time'] == null ? undefined : (new Date(json['expiration_time'])),
        'lastUpdatedTime': json['last_updated_time'] == null ? undefined : (new Date(json['last_updated_time'])),
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'secretIdAccessor': json['secret_id_accessor'] == null ? undefined : json['secret_id_accessor'],
        'secretIdNumUses': json['secret_id_num_uses'] == null ? undefined : json['secret_id_num_uses'],
        'secretIdTtl': json['secret_id_ttl'] == null ? undefined : json['secret_id_ttl'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
    };
}
export function AppRoleLookUpSecretIdResponseToJSON(json) {
    return AppRoleLookUpSecretIdResponseToJSONTyped(json, false);
}
export function AppRoleLookUpSecretIdResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'cidr_list': value['cidrList'],
        'creation_time': value['creationTime'] == null ? undefined : ((value['creationTime']).toISOString()),
        'expiration_time': value['expirationTime'] == null ? undefined : ((value['expirationTime']).toISOString()),
        'last_updated_time': value['lastUpdatedTime'] == null ? undefined : ((value['lastUpdatedTime']).toISOString()),
        'metadata': value['metadata'],
        'secret_id_accessor': value['secretIdAccessor'],
        'secret_id_num_uses': value['secretIdNumUses'],
        'secret_id_ttl': value['secretIdTtl'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
    };
}
