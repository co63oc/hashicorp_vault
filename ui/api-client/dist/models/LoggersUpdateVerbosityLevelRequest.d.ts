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
 *
 * @export
 * @interface LoggersUpdateVerbosityLevelRequest
 */
export interface LoggersUpdateVerbosityLevelRequest {
    /**
     * Log verbosity level. Supported values (in order of detail) are "trace", "debug", "info", "warn", and "error".
     * @type {string}
     * @memberof LoggersUpdateVerbosityLevelRequest
     */
    level?: string;
}
/**
 * Check if a given object implements the LoggersUpdateVerbosityLevelRequest interface.
 */
export declare function instanceOfLoggersUpdateVerbosityLevelRequest(value: object): value is LoggersUpdateVerbosityLevelRequest;
export declare function LoggersUpdateVerbosityLevelRequestFromJSON(json: any): LoggersUpdateVerbosityLevelRequest;
export declare function LoggersUpdateVerbosityLevelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoggersUpdateVerbosityLevelRequest;
export declare function LoggersUpdateVerbosityLevelRequestToJSON(json: any): LoggersUpdateVerbosityLevelRequest;
export declare function LoggersUpdateVerbosityLevelRequestToJSONTyped(value?: LoggersUpdateVerbosityLevelRequest | null, ignoreDiscriminator?: boolean): any;
