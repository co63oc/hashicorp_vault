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
 * @interface TransitSignRequest
 */
export interface TransitSignRequest {
    /**
     * Deprecated: use "hash_algorithm" instead.
     * @type {string}
     * @memberof TransitSignRequest
     */
    algorithm?: string;
    /**
     * Specifies a list of items for processing. When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input
     * @type {Array<object>}
     * @memberof TransitSignRequest
     */
    batchInput?: Array<object>;
    /**
     * Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.
     * @type {string}
     * @memberof TransitSignRequest
     */
    context?: string;
    /**
     * Hash algorithm to use (POST body parameter). Valid values are: * sha1 * sha2-224 * sha2-256 * sha2-384 * sha2-512 * sha3-224 * sha3-256 * sha3-384 * sha3-512 * none Defaults to "sha2-256". Not valid for all key types, including ed25519. Using none requires setting prehashed=true and signature_algorithm=pkcs1v15, yielding a PKCSv1_5_NoOID instead of the usual PKCSv1_5_DERnull signature.
     * @type {string}
     * @memberof TransitSignRequest
     */
    hashAlgorithm?: string;
    /**
     * The base64-encoded input data
     * @type {string}
     * @memberof TransitSignRequest
     */
    input?: string;
    /**
     * The version of the key to use for signing. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
     * @type {number}
     * @memberof TransitSignRequest
     */
    keyVersion?: number;
    /**
     * The method by which to marshal the signature. The default is 'asn1' which is used by openssl and X.509. It can also be set to 'jws' which is used for JWT signatures; setting it to this will also cause the encoding of the signature to be url-safe base64 instead of using standard base64 encoding. Currently only valid for ECDSA P-256 key types".
     * @type {string}
     * @memberof TransitSignRequest
     */
    marshalingAlgorithm?: string;
    /**
     * Set to 'true' when the input is already hashed. If the key type is 'rsa-2048', 'rsa-3072' or 'rsa-4096', then the algorithm used to hash the input should be indicated by the 'algorithm' parameter.
     * @type {boolean}
     * @memberof TransitSignRequest
     */
    prehashed?: boolean;
    /**
     * The salt length used to sign. Currently only applies to the RSA PSS signature scheme. Options are 'auto' (the default used by Golang, causing the salt to be as large as possible when signing), 'hash' (causes the salt length to equal the length of the hash used in the signature), or an integer between the minimum and the maximum permissible salt lengths for the given RSA key size. Defaults to 'auto'.
     * @type {string}
     * @memberof TransitSignRequest
     */
    saltLength?: string;
    /**
     * The signature algorithm to use for signing. Currently only applies to RSA key types. Options are 'pss' or 'pkcs1v15'. Defaults to 'pss'
     * @type {string}
     * @memberof TransitSignRequest
     */
    signatureAlgorithm?: string;
    /**
     * Base64 encoded context for Ed25519ph and Ed25519ctx signatures. Currently only available with Ed25519 keys. (Enterprise Only)
     * @type {string}
     * @memberof TransitSignRequest
     */
    signatureContext?: string;
}

/**
 * Check if a given object implements the TransitSignRequest interface.
 */
export function instanceOfTransitSignRequest(value: object): value is TransitSignRequest {
    return true;
}

export function TransitSignRequestFromJSON(json: any): TransitSignRequest {
    return TransitSignRequestFromJSONTyped(json, false);
}

export function TransitSignRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitSignRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'batchInput': json['batch_input'] == null ? undefined : json['batch_input'],
        'context': json['context'] == null ? undefined : json['context'],
        'hashAlgorithm': json['hash_algorithm'] == null ? undefined : json['hash_algorithm'],
        'input': json['input'] == null ? undefined : json['input'],
        'keyVersion': json['key_version'] == null ? undefined : json['key_version'],
        'marshalingAlgorithm': json['marshaling_algorithm'] == null ? undefined : json['marshaling_algorithm'],
        'prehashed': json['prehashed'] == null ? undefined : json['prehashed'],
        'saltLength': json['salt_length'] == null ? undefined : json['salt_length'],
        'signatureAlgorithm': json['signature_algorithm'] == null ? undefined : json['signature_algorithm'],
        'signatureContext': json['signature_context'] == null ? undefined : json['signature_context'],
    };
}

export function TransitSignRequestToJSON(json: any): TransitSignRequest {
    return TransitSignRequestToJSONTyped(json, false);
}

export function TransitSignRequestToJSONTyped(value?: TransitSignRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'algorithm': value['algorithm'],
        'batch_input': value['batchInput'],
        'context': value['context'],
        'hash_algorithm': value['hashAlgorithm'],
        'input': value['input'],
        'key_version': value['keyVersion'],
        'marshaling_algorithm': value['marshalingAlgorithm'],
        'prehashed': value['prehashed'],
        'salt_length': value['saltLength'],
        'signature_algorithm': value['signatureAlgorithm'],
        'signature_context': value['signatureContext'],
    };
}

