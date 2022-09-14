import { IAclGrant, IAclEntry } from './types';
export declare class AclBuilder<ResourceNames extends keyof any, GroupNames extends keyof any> {
    private readonly record;
    private resource?;
    selectResource(resource: ResourceNames): this;
    setOwnerGrants(grants: IAclGrant): this;
    setGuestGrants(grants: IAclGrant): this;
    setGroupGrants(group: GroupNames, grants: IAclGrant): this;
    build(): import("@bemobile-tech/utils").PartialRecord<ResourceNames, IAclEntry<ResourceNames, GroupNames>>;
}
