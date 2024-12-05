import { Injectable, OnModuleInit } from '@nestjs/common';
import { MemoryUtils } from '../utils/memory.utils';

@Injectable()
export class MemoryMonitorService implements OnModuleInit {
  constructor(private readonly memoryUtils: MemoryUtils) {}

  onModuleInit() {
    this.startMemoryMonitoring();
  }

  private startMemoryMonitoring() {
    setInterval(() => {
      const memoryStats = this.memoryUtils.getMemoryStats();
      
      if (this.memoryUtils.isMemoryThresholdExceeded(memoryStats)) {
        console.warn(`High memory usage detected: ${this.memoryUtils.formatMemoryUsage(memoryStats.heapUsed)}`);
        this.memoryUtils.attemptGarbageCollection();
      }
    }, this.memoryUtils.MEMORY_CHECK_INTERVAL);
  }
}