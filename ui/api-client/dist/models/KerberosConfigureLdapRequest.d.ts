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
 * @interface KerberosConfigureLdapRequest
 */
export interface KerberosConfigureLdapRequest {
    /**
     * Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    anonymousGroupSearch?: boolean;
    /**
     * LDAP DN for searching for the user DN (optional)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    binddn?: string;
    /**
     * LDAP password for searching for the user DN (optional)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    bindpass?: string;
    /**
     * If true, case sensitivity will be used when comparing usernames and groups for matching policies.
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    caseSensitiveNames?: boolean;
    /**
     * CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded (optional)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    certificate?: string;
    /**
     * Client certificate to provide to the LDAP server, must be x509 PEM encoded (optional)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    clientTlsCert?: string;
    /**
     * Client certificate key to provide to the LDAP server, must be x509 PEM encoded (optional)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    clientTlsKey?: string;
    /**
     * Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    connectionTimeout?: string;
    /**
     * Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    denyNullBind?: boolean;
    /**
     * When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Defaults to 'never'.
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    dereferenceAliases?: KerberosConfigureLdapRequestDereferenceAliasesEnum;
    /**
     * Use anonymous bind to discover the bind DN of a user (optional)
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    discoverdn?: boolean;
    /**
     * If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    enableSamaccountnameLogin?: boolean;
    /**
     * LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. Examples: "cn" or "memberOf", etc. Default: cn
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    groupattr?: string;
    /**
     * LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    groupdn?: string;
    /**
     * Go template for querying group membership of user (optional) The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    groupfilter?: string;
    /**
     * Skip LDAP server SSL Certificate verification - VERY insecure (optional)
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    insecureTls?: boolean;
    /**
     * If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control to request pages of up to the given size. This can be used to avoid hitting the LDAP server's maximum result size limit. Otherwise, the LDAP backend will not use the paged search control.
     * @type {number}
     * @memberof KerberosConfigureLdapRequest
     */
    maxPageSize?: number;
    /**
     * Timeout, in seconds, for the connection when making requests against the server before returning back an error.
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    requestTimeout?: string;
    /**
     * Issue a StartTLS command after establishing unencrypted connection (optional)
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    starttls?: boolean;
    /**
     * Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    tlsMaxVersion?: KerberosConfigureLdapRequestTlsMaxVersionEnum;
    /**
     * Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    tlsMinVersion?: KerberosConfigureLdapRequestTlsMinVersionEnum;
    /**
     * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
     * @type {Array<string>}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenBoundCidrs?: Array<string>;
    /**
     * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenExplicitMaxTtl?: string;
    /**
     * The maximum lifetime of the generated token
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenMaxTtl?: string;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenNoDefaultPolicy?: boolean;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     * @type {number}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenNumUses?: number;
    /**
     * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenPeriod?: string;
    /**
     * Comma-separated list of policies. This will apply to all tokens generated by this auth method, in addition to any configured for specific users/groups.
     * @type {Array<string>}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenPolicies?: Array<string>;
    /**
     * The initial ttl of the token to generate
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenTtl?: string;
    /**
     * The type of token to generate, service or batch
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    tokenType?: string;
    /**
     * Enables userPrincipalDomain login with [username]@UPNDomain (optional)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    upndomain?: string;
    /**
     * LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    url?: string;
    /**
     * In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    usePre111GroupCnBehavior?: boolean;
    /**
     * If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. This will find all security groups including nested ones.
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    useTokenGroups?: boolean;
    /**
     * Attribute used for users (default: cn)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    userattr?: string;
    /**
     * LDAP domain to use for users (eg: ou=People,dc=example,dc=org)
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    userdn?: string;
    /**
     * Go template for LDAP user search filer (optional) The template can access the following context variables: UserAttr, Username Default: ({{.UserAttr}}={{.Username}})
     * @type {string}
     * @memberof KerberosConfigureLdapRequest
     */
    userfilter?: string;
    /**
     * If true, sets the alias name to the username
     * @type {boolean}
     * @memberof KerberosConfigureLdapRequest
     */
    usernameAsAlias?: boolean;
}
/**
* @export
* @enum {string}
*/
export declare enum KerberosConfigureLdapRequestDereferenceAliasesEnum {
    NEVER = "never",
    FINDING = "finding",
    SEARCHING = "searching",
    ALWAYS = "always"
}
/**
* @export
* @enum {string}
*/
export declare enum KerberosConfigureLdapRequestTlsMaxVersionEnum {
    TLS10 = "tls10",
    TLS11 = "tls11",
    TLS12 = "tls12",
    TLS13 = "tls13"
}
/**
* @export
* @enum {string}
*/
export declare enum KerberosConfigureLdapRequestTlsMinVersionEnum {
    TLS10 = "tls10",
    TLS11 = "tls11",
    TLS12 = "tls12",
    TLS13 = "tls13"
}
/**
 * Check if a given object implements the KerberosConfigureLdapRequest interface.
 */
export declare function instanceOfKerberosConfigureLdapRequest(value: object): value is KerberosConfigureLdapRequest;
export declare function KerberosConfigureLdapRequestFromJSON(json: any): KerberosConfigureLdapRequest;
export declare function KerberosConfigureLdapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KerberosConfigureLdapRequest;
export declare function KerberosConfigureLdapRequestToJSON(json: any): KerberosConfigureLdapRequest;
export declare function KerberosConfigureLdapRequestToJSONTyped(value?: KerberosConfigureLdapRequest | null, ignoreDiscriminator?: boolean): any;
