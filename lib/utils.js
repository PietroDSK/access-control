"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@bemobile-tech/utils");
const constants_1 = require("./constants");
function getAclFromContext(context) {
    return utils_1.getMetadata(constants_1.ACL_METADATA_ACL, context.getHandler());
}
exports.getAclFromContext = getAclFromContext;
function getDefaultGuestGrant() {
    return {
        create: false,
        read: false,
        update: false,
        delete: false,
        list: false,
    };
}
exports.getDefaultGuestGrant = getDefaultGuestGrant;
function getDefaultOwnerGrant() {
    return {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: false,
    };
}
exports.getDefaultOwnerGrant = getDefaultOwnerGrant;
function getDefaultAclEntry(resource) {
    return {
        resource,
        groups: {},
        guest: getDefaultGuestGrant(),
        owner: getDefaultOwnerGrant(),
    };
}
exports.getDefaultAclEntry = getDefaultAclEntry;
function mergeGrants(grantA, grantB) {
    const result = getDefaultGuestGrant();
    Object.keys(result).forEach((key) => {
        result[key] = grantA[key] || grantB[key];
    });
    return result;
}
exports.mergeGrants = mergeGrants;
function evaluateGroupGrants(aclEntry, groups) {
    let evaluated = getDefaultGuestGrant();
    groups.forEach((group) => {
        var _a;
        const grants = (_a = aclEntry.groups[group]) !== null && _a !== void 0 ? _a : getDefaultGuestGrant();
        evaluated = mergeGrants(evaluated, grants);
    });
    return evaluated;
}
exports.evaluateGroupGrants = evaluateGroupGrants;
