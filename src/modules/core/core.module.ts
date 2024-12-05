import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../../config/database.config';
import { MemoryMonitorService } from './services/memory-monitor.service';
import { MemoryUtils } from './utils/memory.utils';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
  ],
  providers: [MemoryMonitorService, MemoryUtils],
  exports: [MemoryMonitorService],
})
export class CoreModule {}