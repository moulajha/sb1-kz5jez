import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../../entities/employee.entity';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/employee.controller';
import { TenantModule } from '../tenant/tenant.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    TenantModule
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService]
})
export class EmployeeModule {}