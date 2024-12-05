import { OnModuleInit } from '@nestjs/common';
import { MemoryUtils } from '../utils/memory.utils';
export declare class MemoryMonitorService implements OnModuleInit {
    private readonly memoryUtils;
    constructor(memoryUtils: MemoryUtils);
    onModuleInit(): void;
    private startMemoryMonitoring;
}
