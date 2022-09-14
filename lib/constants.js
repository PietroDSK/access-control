"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACL_METADATA_RESOLVER = 'ACL_METADATA_RESOLVER';
exports.ACL_ROLE_RESOLVER = 'ACL_ROLE_RESOLVER';
exports.ACL_METADATA_ACL = 'ACL_METADATA_ACL';
exports.ER_ACL_INSUFFICIENT_GRANT = {
    code: 'ER_ACL_INSUFFICIENT_GRANT',
    message: 'you do not have permission to execute this action',
    status: 403,
};
exports.ACL_NEW_RESOURCE = Symbol('ACL_NEW_RESOURCE');
exports.ACL_ANY_RESOURCE = Symbol('ACL_ANY_RESOURCE');
