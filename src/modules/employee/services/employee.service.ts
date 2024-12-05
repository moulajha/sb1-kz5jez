import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../../../entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {}

  async create(data: Partial<Employee>, tenantId: string): Promise<Employee> {
    const employee = this.employeeRepository.create({
      ...data,
      tenantId
    });
    return await this.employeeRepository.save(employee);
  }

  async findAll(tenantId: string): Promise<Employee[]> {
    return await this.employeeRepository.find({
      where: { tenantId, isDeleted: false }
    });
  }

  async findOne(id: string, tenantId: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: { id, tenantId, isDeleted: false }
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    return employee;
  }

  async update(id: string, data: Partial<Employee>, tenantId: string): Promise<Employee> {
    await this.employeeRepository.update(
      { id, tenantId },
      data
    );
    
    return await this.findOne(id, tenantId);
  }

  async softDelete(id: string, tenantId: string): Promise<void> {
    const result = await this.employeeRepository.update(
      { id, tenantId },
      { isDeleted: true }
    );

    if (result.affected === 0) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
  }
}