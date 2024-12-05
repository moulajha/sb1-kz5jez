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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryMonitorService = void 0;
const common_1 = require("@nestjs/common");
const memory_utils_1 = require("../utils/memory.utils");
let MemoryMonitorService = class MemoryMonitorService {
    constructor(memoryUtils) {
        this.memoryUtils = memoryUtils;
    }
    onModuleInit() {
        this.startMemoryMonitoring();
    }
    startMemoryMonitoring() {
        setInterval(() => {
            const memoryStats = this.memoryUtils.getMemoryStats();
            if (this.memoryUtils.isMemoryThresholdExceeded(memoryStats)) {
                console.warn(`High memory usage detected: ${this.memoryUtils.formatMemoryUsage(memoryStats.heapUsed)}`);
                this.memoryUtils.attemptGarbageCollection();
            }
        }, this.memoryUtils.MEMORY_CHECK_INTERVAL);
    }
};
exports.MemoryMonitorService = MemoryMonitorService;
exports.MemoryMonitorService = MemoryMonitorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [memory_utils_1.MemoryUtils])
], MemoryMonitorService);
//# sourceMappingURL=memory-monitor.service.js.map