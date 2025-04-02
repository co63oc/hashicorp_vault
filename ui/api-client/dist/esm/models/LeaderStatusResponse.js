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
 * Check if a given object implements the LeaderStatusResponse interface.
 */
export function instanceOfLeaderStatusResponse(value) {
    return true;
}
export function LeaderStatusResponseFromJSON(json) {
    return LeaderStatusResponseFromJSONTyped(json, false);
}
export function LeaderStatusResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'activeTime': json['active_time'] == null ? undefined : (new Date(json['active_time'])),
        'haEnabled': json['ha_enabled'] == null ? undefined : json['ha_enabled'],
        'isSelf': json['is_self'] == null ? undefined : json['is_self'],
        'lastWal': json['last_wal'] == null ? undefined : json['last_wal'],
        'leaderAddress': json['leader_address'] == null ? undefined : json['leader_address'],
        'leaderClusterAddress': json['leader_cluster_address'] == null ? undefined : json['leader_cluster_address'],
        'performanceStandby': json['performance_standby'] == null ? undefined : json['performance_standby'],
        'performanceStandbyLastRemoteWal': json['performance_standby_last_remote_wal'] == null ? undefined : json['performance_standby_last_remote_wal'],
        'raftAppliedIndex': json['raft_applied_index'] == null ? undefined : json['raft_applied_index'],
        'raftCommittedIndex': json['raft_committed_index'] == null ? undefined : json['raft_committed_index'],
    };
}
export function LeaderStatusResponseToJSON(json) {
    return LeaderStatusResponseToJSONTyped(json, false);
}
export function LeaderStatusResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'active_time': value['activeTime'] == null ? undefined : ((value['activeTime']).toISOString()),
        'ha_enabled': value['haEnabled'],
        'is_self': value['isSelf'],
        'last_wal': value['lastWal'],
        'leader_address': value['leaderAddress'],
        'leader_cluster_address': value['leaderClusterAddress'],
        'performance_standby': value['performanceStandby'],
        'performance_standby_last_remote_wal': value['performanceStandbyLastRemoteWal'],
        'raft_applied_index': value['raftAppliedIndex'],
        'raft_committed_index': value['raftCommittedIndex'],
    };
}
