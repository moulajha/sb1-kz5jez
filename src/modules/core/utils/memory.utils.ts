import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryUtils {
  readonly MEMORY_CHECK_INTERVAL = 30000; // 30 seconds
  readonly HEAP_THRESHOLD = 150 * 1024 * 1024; // 150MB

  getMemoryStats(): NodeJS.MemoryUsage {
    return process.memoryUsage();
  }

  formatMemoryUsage(bytes: number): string {
    return `${Math.round(bytes / 1024 / 1024)}MB`;
  }

  isMemoryThresholdExceeded(memoryStats: NodeJS.MemoryUsage): boolean {
    return memoryStats.heapUsed > this.HEAP_THRESHOLD;
  }

  attemptGarbageCollection(): void {
    if (global.gc) {
      global.gc();
    }
  }
}