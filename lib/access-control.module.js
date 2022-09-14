"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AccessControlModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const acl_guard_1 = require("./acl.guard");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const log_1 = require("@bemobile-tech/log");
let AccessControlModule = AccessControlModule_1 = class AccessControlModule {
    static forFeature(options) {
        return {
            module: AccessControlModule_1,
            imports: [...(options.imports || []), log_1.LogModule.forFeature(acl_guard_1.AclGuard)],
            providers: [
                ...(options.providers || []),
                {
                    provide: constants_1.ACL_ROLE_RESOLVER,
                    useClass: options.useResolver,
                },
                {
                    provide: constants_1.ACL_METADATA_RESOLVER,
                    useValue: utils_1.getAclFromContext,
                },
                acl_guard_1.AclGuard,
            ],
            exports: [constants_1.ACL_ROLE_RESOLVER, constants_1.ACL_METADATA_RESOLVER, acl_guard_1.AclGuard, log_1.LogModule],
        };
    }
};
AccessControlModule = AccessControlModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], AccessControlModule);
exports.AccessControlModule = AccessControlModule;
