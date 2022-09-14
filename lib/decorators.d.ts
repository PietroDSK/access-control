import 'reflect-metadata';
import { TAclOptions } from './types';
export declare const Acl: (metadata: {
    objectType: string;
    objectId: import("./types").getIdFromReqFn;
    action: import("./types").AclCrud.Read | import("./types").AclCrud.Update | import("./types").AclCrud.Delete;
} | {
    objectType: string;
    action: import("./types").AclCrud.Create | import("./types").AclCrud.List;
} | TAclOptions<string>[]) => MethodDecorator;
