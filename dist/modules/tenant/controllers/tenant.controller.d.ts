export declare class TenantController {
    getTenantInfo(tenantId: string): {
        tenantId: string;
        status: string;
        timestamp: string;
    };
    healthCheck(): {
        status: string;
        timestamp: string;
    };
}
