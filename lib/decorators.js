"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const utils_1 = require("@bemobile-tech/utils");
const constants_1 = require("./constants");
exports.Acl = (metadata) => utils_1.setMetadata(constants_1.ACL_METADATA_ACL, Array.isArray(metadata) ? metadata : [metadata]);
