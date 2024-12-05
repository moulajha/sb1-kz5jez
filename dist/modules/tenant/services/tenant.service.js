"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantService = void 0;
const common_1 = require("@nestjs/common");
let TenantService = class TenantService {
    constructor() {
        this.tenantCache = new Map();
        this.currentTenant = null;
    }
    setCurrentTenant(tenantId) {
        this.currentTenant = tenantId;
    }
    getCurrentTenant() {
        return this.currentTenant;
    }
    isValidTenant(tenantId) {
        return typeof tenantId === 'string' && tenantId.length > 0;
    }
    initializeTenantCache(tenantId) {
        if (!this.tenantCache.has(tenantId)) {
            this.tenantCache.set(tenantId, new WeakMap());
        }
    }
    getTenantCache(tenantId) {
        return this.tenantCache.get(tenantId) || new WeakMap();
    }
    clearTenantCache(tenantId) {
        this.tenantCache.delete(tenantId);
    }
};
exports.TenantService = TenantService;
exports.TenantService = TenantService = __decorate([
    (0, common_1.Injectable)()
], TenantService);
//# sourceMappingURL=tenant.service.js.map