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
 * @interface TransitVerifyWithAlgorithmRequest
 */
export interface TransitVerifyWithAlgorithmRequest {
    /**
     * Deprecated: use "hash_algorithm" instead.
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    algorithm?: string;
    /**
     * Specifies a list of items for processing. When this parameter is set, any supplied 'input', 'hmac', 'cmac' or 'signature' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input
     * @type {Array<object>}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    batchInput?: Array<object>;
    /**
     * The CMAC, including vault header/key version (Enterprise only)
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    cmac?: string;
    /**
     * Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    context?: string;
    /**
     * Hash algorithm to use (POST body parameter). Valid values are: * sha1 * sha2-224 * sha2-256 * sha2-384 * sha2-512 * sha3-224 * sha3-256 * sha3-384 * sha3-512 * none Defaults to "sha2-256". Not valid for all key types. See note about none on signing path.
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    hashAlgorithm?: string;
    /**
     * The HMAC, including vault header/key version
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    hmac?: string;
    /**
     * The base64-encoded input data to verify
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    input?: string;
    /**
     * MAC length to use (POST body parameter). Valid values are:
     * @type {number}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    macLength?: number;
    /**
     * The method by which to unmarshal the signature when verifying. The default is 'asn1' which is used by openssl and X.509; can also be set to 'jws' which is used for JWT signatures in which case the signature is also expected to be url-safe base64 encoding instead of standard base64 encoding. Currently only valid for ECDSA P-256 key types".
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    marshalingAlgorithm?: string;
    /**
     * Set to 'true' when the input is already hashed. If the key type is 'rsa-2048', 'rsa-3072' or 'rsa-4096', then the algorithm used to hash the input should be indicated by the 'algorithm' parameter.
     * @type {boolean}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    prehashed?: boolean;
    /**
     * The salt length used to sign. Currently only applies to the RSA PSS signature scheme. Options are 'auto' (the default used by Golang, causing the salt to be as large as possible when signing), 'hash' (causes the salt length to equal the length of the hash used in the signature), or an integer between the minimum and the maximum permissible salt lengths for the given RSA key size. Defaults to 'auto'.
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    saltLength?: string;
    /**
     * The signature, including vault header/key version
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    signature?: string;
    /**
     * The signature algorithm to use for signature verification. Currently only applies to RSA key types. Options are 'pss' or 'pkcs1v15'. Defaults to 'pss'
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    signatureAlgorithm?: string;
    /**
     * Base64 encoded context for Ed25519ph and Ed25519ctx signatures. Currently only available with Ed25519 keys. (Enterprise Only)
     * @type {string}
     * @memberof TransitVerifyWithAlgorithmRequest
     */
    signatureContext?: string;
}

/**
 * Check if a given object implements the TransitVerifyWithAlgorithmRequest interface.
 */
export function instanceOfTransitVerifyWithAlgorithmRequest(value: object): value is TransitVerifyWithAlgorithmRequest {
    return true;
}

export function TransitVerifyWithAlgorithmRequestFromJSON(json: any): TransitVerifyWithAlgorithmRequest {
    return TransitVerifyWithAlgorithmRequestFromJSONTyped(json, false);
}

export function TransitVerifyWithAlgorithmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitVerifyWithAlgorithmRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'batchInput': json['batch_input'] == null ? undefined : json['batch_input'],
        'cmac': json['cmac'] == null ? undefined : json['cmac'],
        'context': json['context'] == null ? undefined : json['context'],
        'hashAlgorithm': json['hash_algorithm'] == null ? undefined : json['hash_algorithm'],
        'hmac': json['hmac'] == null ? undefined : json['hmac'],
        'input': json['input'] == null ? undefined : json['input'],
        'macLength': json['mac_length'] == null ? undefined : json['mac_length'],
        'marshalingAlgorithm': json['marshaling_algorithm'] == null ? undefined : json['marshaling_algorithm'],
        'prehashed': json['prehashed'] == null ? undefined : json['prehashed'],
        'saltLength': json['salt_length'] == null ? undefined : json['salt_length'],
        'signature': json['signature'] == null ? undefined : json['signature'],
        'signatureAlgorithm': json['signature_algorithm'] == null ? undefined : json['signature_algorithm'],
        'signatureContext': json['signature_context'] == null ? undefined : json['signature_context'],
    };
}

export function TransitVerifyWithAlgorithmRequestToJSON(json: any): TransitVerifyWithAlgorithmRequest {
    return TransitVerifyWithAlgorithmRequestToJSONTyped(json, false);
}

export function TransitVerifyWithAlgorithmRequestToJSONTyped(value?: TransitVerifyWithAlgorithmRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'algorithm': value['algorithm'],
        'batch_input': value['batchInput'],
        'cmac': value['cmac'],
        'context': value['context'],
        'hash_algorithm': value['hashAlgorithm'],
        'hmac': value['hmac'],
        'input': value['input'],
        'mac_length': value['macLength'],
        'marshaling_algorithm': value['marshalingAlgorithm'],
        'prehashed': value['prehashed'],
        'salt_length': value['saltLength'],
        'signature': value['signature'],
        'signature_algorithm': value['signatureAlgorithm'],
        'signature_context': value['signatureContext'],
    };
}

