"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AclGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const http_1 = require("@bemobile-tech/http");
const log_1 = require("@bemobile-tech/log");
const utils_1 = require("@bemobile-tech/utils");
const NodeCache = require("node-cache");
let AclGuard = AclGuard_1 = class AclGuard {
    constructor(resolver, getAclFromContext, logger) {
        this.resolver = resolver;
        this.getAclFromContext = getAclFromContext;
        this.logger = logger;
        this.cache = new NodeCache({
            stdTTL: 60,
        });
    }
    async canActivate(context) {
        const metadata = this.getAclFromContext(context) || [];
        await utils_1.AsyncUtils.each(metadata, async (acl) => {
            const grants = await this.getGrants(context, acl);
            if (!grants[acl.action]) {
                this.logger.warn('Grants validation failed.', {
                    expected: acl,
                    received: grants,
                });
                throw new http_1.StdHttpException(constants_1.ER_ACL_INSUFFICIENT_GRANT);
            }
        });
        return true;
    }
    async getGrants(context, acl) {
        var _a, _b;
        const req = context.switchToHttp().getRequest();
        const objectId = 'objectId' in acl ? acl.objectId(req) : undefined;
        const params = {
            objectId,
            objectType: acl.objectType,
            action: acl.action,
        };
        const user = req.user;
        const userId = (_a = user === null || user === void 0 ? void 0 : user.sub) !== null && _a !== void 0 ? _a : '-';
        const cacheKey = `${userId}:${params.objectType}:${(_b = params.objectId) !== null && _b !== void 0 ? _b : '-'}:${params.action}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        const grants = await this.resolver.getGrants(context, params);
        this.cache.set(cacheKey, grants);
        return grants;
    }
};
AclGuard = AclGuard_1 = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.ACL_ROLE_RESOLVER)),
    __param(1, common_1.Inject(constants_1.ACL_METADATA_RESOLVER)),
    __param(2, log_1.InjectLogger(AclGuard_1)),
    __metadata("design:paramtypes", [Object, Function, log_1.Logger])
], AclGuard);
exports.AclGuard = AclGuard;
