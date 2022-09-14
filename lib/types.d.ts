import * as express from 'express';
import { ExecutionContext, Type } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { PartialRecord } from '@bemobile-tech/utils';
export declare type getIdFromReqFn = (req: express.Request) => string;
export declare enum AclCrud {
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete",
    List = "list"
}
export declare type TAclOptions<TResource extends keyof any = string> = {
    objectType: TResource;
    objectId: getIdFromReqFn;
    action: AclCrud.Delete | AclCrud.Read | AclCrud.Update;
} | {
    objectType: TResource;
    action: AclCrud.List | AclCrud.Create;
};
export interface IAclParams<T> {
    objectType: T;
    objectId?: string;
    action: AclCrud;
}
export interface IAclGrant extends PartialRecord<AclCrud, boolean> {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
    list?: boolean;
}
export interface IAclRole<U extends keyof any> {
    name: string;
    groups: U[];
}
export interface IAclEntry<ResourceNames extends keyof any, GroupNames extends keyof any> {
    resource: ResourceNames;
    owner: IAclGrant;
    guest: IAclGrant;
    groups: PartialRecord<GroupNames, IAclGrant>;
}
export declare type IAclGrantsTree<ResourceNames extends keyof any, GroupNames extends keyof any> = PartialRecord<ResourceNames, IAclEntry<ResourceNames, GroupNames>>;
export declare type IAclRolesTree<ResourceNames extends keyof any, GroupNames extends keyof any> = PartialRecord<ResourceNames, IAclRole<GroupNames>>;
export interface IAclResolver<ResourceNames extends keyof any> {
    getGrants(context: ExecutionContext, params: IAclParams<ResourceNames>): Promise<IAclGrant>;
}
export declare type getAclFromContextFn = (context: ExecutionContext) => TAclOptions[] | undefined;
export declare type IAclModuleForFeatureOptions = Pick<ModuleMetadata, 'imports' | 'providers'> & {
    useResolver: Type<IAclResolver<any>>;
};
