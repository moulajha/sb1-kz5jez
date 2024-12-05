import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { TenantService } from '../../modules/tenant/services/tenant.service';

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(private readonly tenantService: TenantService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const tenantId = request.headers['x-tenant-id'];
    
    return this.tenantService.isValidTenant(tenantId);
  }
}