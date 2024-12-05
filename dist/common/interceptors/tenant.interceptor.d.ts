import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TenantService } from '../../modules/tenant/services/tenant.service';
export declare class TenantInterceptor implements NestInterceptor {
    private readonly tenantService;
    constructor(tenantService: TenantService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
