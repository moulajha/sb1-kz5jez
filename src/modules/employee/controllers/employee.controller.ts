import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../../entities/employee.entity';

@Controller('api/employees')
@UseGuards(TenantGuard)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(
    @Body() data: Partial<Employee>,
    @CurrentTenant() tenantId: string
  ): Promise<Employee> {
    return await this.employeeService.create(data, tenantId);
  }

  @Get()
  async findAll(@CurrentTenant() tenantId: string): Promise<Employee[]> {
    return await this.employeeService.findAll(tenantId);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @CurrentTenant() tenantId: string
  ): Promise<Employee> {
    return await this.employeeService.findOne(id, tenantId);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Employee>,
    @CurrentTenant() tenantId: string
  ): Promise<Employee> {
    return await this.employeeService.update(id, data, tenantId);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @CurrentTenant() tenantId: string
  ): Promise<void> {
    await this.employeeService.softDelete(id, tenantId);
  }
}