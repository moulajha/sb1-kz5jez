"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMemoryThresholdExceeded = exports.formatMemoryUsage = void 0;
const formatMemoryUsage = (bytes) => {
    return `${Math.round(bytes / 1024 / 1024)}MB`;
};
exports.formatMemoryUsage = formatMemoryUsage;
const isMemoryThresholdExceeded = (used, threshold) => {
    return used.heapUsed > threshold;
};
exports.isMemoryThresholdExceeded = isMemoryThresholdExceeded;
//# sourceMappingURL=memory.utils.js.map