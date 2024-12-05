import { Injectable } from '@nestjs/common';
import { TenantCache } from '../types/tenant.types';

@Injectable()
export class TenantService {
  private readonly tenantCache: TenantCache = new Map();
  private currentTenant: string | null = null;

  setCurrentTenant(tenantId: string): void {
    this.currentTenant = tenantId;
  }

  getCurrentTenant(): string | null {
    return this.currentTenant;
  }

  isValidTenant(tenantId: string): boolean {
    return typeof tenantId === 'string' && tenantId.length > 0;
  }

  initializeTenantCache(tenantId: string): void {
    if (!this.tenantCache.has(tenantId)) {
      this.tenantCache.set(tenantId, new WeakMap());
    }
  }

  getTenantCache(tenantId: string): WeakMap<object, any> {
    return this.tenantCache.get(tenantId) || new WeakMap();
  }

  clearTenantCache(tenantId: string): void {
    this.tenantCache.delete(tenantId);
  }
}