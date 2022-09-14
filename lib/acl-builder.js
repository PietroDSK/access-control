"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class AclBuilder {
    constructor() {
        this.record = {};
    }
    selectResource(resource) {
        var _a;
        this.record[resource] = (_a = this.record[resource]) !== null && _a !== void 0 ? _a : utils_1.getDefaultAclEntry(resource);
        this.resource = this.record[resource];
        return this;
    }
    setOwnerGrants(grants) {
        if (this.resource) {
            this.resource.owner = grants;
        }
        return this;
    }
    setGuestGrants(grants) {
        if (this.resource) {
            this.resource.guest = grants;
        }
        return this;
    }
    setGroupGrants(group, grants) {
        if (this.resource) {
            this.resource.groups[group] = grants;
        }
        return this;
    }
    build() {
        return this.record;
    }
}
exports.AclBuilder = AclBuilder;
