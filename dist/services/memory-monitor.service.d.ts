import { OnModuleInit } from '@nestjs/common';
export declare class MemoryMonitorService implements OnModuleInit {
    private readonly MEMORY_CHECK_INTERVAL;
    private readonly HEAP_THRESHOLD;
    onModuleInit(): void;
    private startMemoryMonitoring;
}
