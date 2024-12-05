export declare class TenantService {
    private readonly tenantCache;
    private currentTenant;
    setCurrentTenant(tenantId: string): void;
    getCurrentTenant(): string | null;
    isValidTenant(tenantId: string): boolean;
    initializeTenantCache(tenantId: string): void;
    getTenantCache(tenantId: string): WeakMap<object, any>;
    clearTenantCache(tenantId: string): void;
}
