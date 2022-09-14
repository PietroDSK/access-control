"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RolesBuilder {
    constructor() {
        this.record = {};
    }
    selectRole(role) {
        var _a;
        this.record[role] = (_a = this.record[role]) !== null && _a !== void 0 ? _a : {
            name: role,
            groups: [],
        };
        this.role = this.record[role];
        return this;
    }
    addGroups(...groups) {
        if (this.role) {
            // Remove duplicates
            this.role.groups = [...new Set(this.role.groups.concat(groups))];
        }
        return this;
    }
    build() {
        return this.record;
    }
}
exports.RolesBuilder = RolesBuilder;
