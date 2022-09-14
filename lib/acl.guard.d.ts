import 'reflect-metadata';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { getAclFromContextFn, IAclResolver } from './types';
import { Logger } from '@bemobile-tech/log';
export declare class AclGuard implements CanActivate {
    private readonly resolver;
    private readonly getAclFromContext;
    private readonly logger;
    private readonly cache;
    constructor(resolver: IAclResolver<any>, getAclFromContext: getAclFromContextFn, logger: Logger);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private getGrants;
}
