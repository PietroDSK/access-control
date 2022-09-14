import { IAclRole } from './types';
export declare class RolesBuilder<RoleNames extends keyof any, GroupNames extends keyof any> {
    private readonly record;
    private role?;
    selectRole(role: RoleNames): this;
    addGroups(...groups: GroupNames[]): this;
    build(): import("@bemobile-tech/utils").PartialRecord<RoleNames, IAclRole<GroupNames>>;
}
