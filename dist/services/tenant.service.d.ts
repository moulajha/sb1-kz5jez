export declare class TenantService {
    private readonly tenantCache;
    private currentTenant;
    initializeTenantCache(tenantId: string): void;
    getTenantCache(tenantId: string): WeakMap<object, any>;
    clearTenantCache(tenantId: string): void;
    setCurrentTenant(tenantId: string): void;
    getCurrentTenant(): string | null;
    isValidTenant(tenantId: string): boolean;
}
