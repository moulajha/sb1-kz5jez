import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantService } from '../modules/tenant/services/tenant.service';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly tenantService: TenantService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const tenantId = req.headers['x-tenant-id'] as string;
    
    if (!tenantId) {
      res.status(400).json({ message: 'Tenant ID is required' });
      return;
    }

    if (!this.tenantService.isValidTenant(tenantId)) {
      res.status(400).json({ message: 'Invalid tenant ID' });
      return;
    }

    (req as any).tenantId = tenantId;
    this.tenantService.setCurrentTenant(tenantId);
    this.tenantService.initializeTenantCache(tenantId);

    next();
  }
}