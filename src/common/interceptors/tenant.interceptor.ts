import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TenantService } from '../../modules/tenant/services/tenant.service';

@Injectable()
export class TenantInterceptor implements NestInterceptor {
  constructor(private readonly tenantService: TenantService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const tenantId = request.tenantId;
    
    // Ensure tenant context is set
    this.tenantService.setCurrentTenant(tenantId);
    
    return next.handle();
  }
}