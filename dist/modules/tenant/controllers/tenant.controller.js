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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantController = void 0;
const common_1 = require("@nestjs/common");
const tenant_guard_1 = require("../../../common/guards/tenant.guard");
const tenant_decorator_1 = require("../../../common/decorators/tenant.decorator");
let TenantController = class TenantController {
    getTenantInfo(tenantId) {
        return {
            tenantId,
            status: 'active',
            timestamp: new Date().toISOString()
        };
    }
    healthCheck() {
        return {
            status: 'healthy',
            timestamp: new Date().toISOString()
        };
    }
};
exports.TenantController = TenantController;
__decorate([
    (0, common_1.Get)('info'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "getTenantInfo", null);
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "healthCheck", null);
exports.TenantController = TenantController = __decorate([
    (0, common_1.Controller)('api/tenants'),
    (0, common_1.UseGuards)(tenant_guard_1.TenantGuard)
], TenantController);
//# sourceMappingURL=tenant.controller.js.map