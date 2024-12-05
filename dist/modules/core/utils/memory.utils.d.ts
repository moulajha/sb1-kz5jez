export declare class MemoryUtils {
    readonly MEMORY_CHECK_INTERVAL = 30000;
    readonly HEAP_THRESHOLD: number;
    getMemoryStats(): NodeJS.MemoryUsage;
    formatMemoryUsage(bytes: number): string;
    isMemoryThresholdExceeded(memoryStats: NodeJS.MemoryUsage): boolean;
    attemptGarbageCollection(): void;
}
