"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GrantsBuilder {
    constructor() {
        this.create = false;
        this.read = false;
        this.update = false;
        this.delete = false;
    }
    static canCreate() {
        return new GrantsBuilder().canCreate();
    }
    canCreate() {
        this.create = true;
        return this;
    }
    static canRead() {
        return new GrantsBuilder().canRead();
    }
    canRead() {
        this.read = true;
        return this;
    }
    static any() {
        return new GrantsBuilder().any();
    }
    any() {
        return this.canCreate().canRead();
    }
}
exports.GrantsBuilder = GrantsBuilder;
