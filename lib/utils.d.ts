import { ExecutionContext } from '@nestjs/common';
import { IAclEntry, IAclGrant, TAclOptions } from './types';
export declare function getAclFromContext(context: ExecutionContext): TAclOptions[] | undefined;
export declare function getDefaultGuestGrant(): IAclGrant;
export declare function getDefaultOwnerGrant(): IAclGrant;
export declare function getDefaultAclEntry<ResourceNames extends keyof any, GroupNames extends keyof any>(resource: ResourceNames): IAclEntry<ResourceNames, GroupNames>;
export declare function mergeGrants(grantA: IAclGrant, grantB: IAclGrant): IAclGrant;
export declare function evaluateGroupGrants<ResourceNames extends keyof any, GroupNames extends keyof any>(aclEntry: IAclEntry<ResourceNames, GroupNames>, groups: GroupNames[]): IAclGrant;
