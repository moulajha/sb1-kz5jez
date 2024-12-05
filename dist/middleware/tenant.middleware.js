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
exports.TenantMiddleware = void 0;
const common_1 = require("@nestjs/common");
const tenant_service_1 = require("../modules/tenant/services/tenant.service");
let TenantMiddleware = class TenantMiddleware {
    constructor(tenantService) {
        this.tenantService = tenantService;
    }
    use(req, res, next) {
        const tenantId = req.headers['x-tenant-id'];
        if (!tenantId) {
            res.status(400).json({ message: 'Tenant ID is required' });
            return;
        }
        if (!this.tenantService.isValidTenant(tenantId)) {
            res.status(400).json({ message: 'Invalid tenant ID' });
            return;
        }
        req.tenantId = tenantId;
        this.tenantService.setCurrentTenant(tenantId);
        this.tenantService.initializeTenantCache(tenantId);
        next();
    }
};
exports.TenantMiddleware = TenantMiddleware;
exports.TenantMiddleware = TenantMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tenant_service_1.TenantService])
], TenantMiddleware);
//# sourceMappingURL=tenant.middleware.js.map