"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const core_module_1 = require("./modules/core/core.module");
const tenant_module_1 = require("./modules/tenant/tenant.module");
const employee_module_1 = require("./modules/employee/employee.module");
const tenant_middleware_1 = require("./middleware/tenant.middleware");
const tenant_interceptor_1 = require("./common/interceptors/tenant.interceptor");
const tenant_guard_1 = require("./common/guards/tenant.guard");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(tenant_middleware_1.TenantMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_module_1.CoreModule,
            tenant_module_1.TenantModule,
            employee_module_1.EmployeeModule
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: tenant_interceptor_1.TenantInterceptor,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: tenant_guard_1.TenantGuard,
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map