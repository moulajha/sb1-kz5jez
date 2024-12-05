import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';

@Controller('api/tenants')
@UseGuards(TenantGuard)
export class TenantController {
  @Get('info')
  getTenantInfo(@CurrentTenant() tenantId: string) {
    return {
      tenantId,
      status: 'active',
      timestamp: new Date().toISOString()
    };
  }

  @Get('health')
  healthCheck() {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString()
    };
  }
}