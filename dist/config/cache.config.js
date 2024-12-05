"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.cacheConfig = void 0;
const node_cache_1 = require("node-cache");
exports.cacheConfig = {
    stdTTL: 600,
    checkperiod: 120,
    maxKeys: 1000,
    useClones: false
};
exports.cache = new node_cache_1.default(exports.cacheConfig);
//# sourceMappingURL=cache.config.js.map