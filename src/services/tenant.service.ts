import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantService {
  private readonly tenantCache: Map<string, WeakMap<object, any>> = new Map();
  private currentTenant: string | null = null;

  initializeTenantCache(tenantId: string): void {
    if (!this.tenantCache.has(tenantId)) {
      this.tenantCache.set(tenantId, new WeakMap());
    }
  }

  getTenantCache(tenantId: string): WeakMap<object, any> {
    const cache = this.tenantCache.get(tenantId);
    if (!cache) {
      const newCache = new WeakMap<object, any>();
      this.tenantCache.set(tenantId, newCache);
      return newCache;
    }
    return cache;
  }

  clearTenantCache(tenantId: string): void {
    this.tenantCache.delete(tenantId);
  }

  setCurrentTenant(tenantId: string): void {
    this.currentTenant = tenantId;
  }

  getCurrentTenant(): string | null {
    return this.currentTenant;
  }

  isValidTenant(tenantId: string): boolean {
    return typeof tenantId === 'string' && tenantId.length > 0;
  }
}