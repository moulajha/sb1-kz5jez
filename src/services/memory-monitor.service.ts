import { Injectable, OnModuleInit } from '@nestjs/common';
import { formatMemoryUsage, isMemoryThresholdExceeded } from '../utils/memory.utils';

@Injectable()
export class MemoryMonitorService implements OnModuleInit {
  private readonly MEMORY_CHECK_INTERVAL = 30000; // 30 seconds
  private readonly HEAP_THRESHOLD = 150 * 1024 * 1024; // 150MB

  onModuleInit() {
    this.startMemoryMonitoring();
  }

  private startMemoryMonitoring() {
    setInterval(() => {
      const used = process.memoryUsage();
      
      if (isMemoryThresholdExceeded(used, this.HEAP_THRESHOLD)) {
        console.warn(`High memory usage detected: ${formatMemoryUsage(used.heapUsed)}`);
        
        if (global.gc) {
          global.gc();
        }
      }
    }, this.MEMORY_CHECK_INTERVAL);
  }
}