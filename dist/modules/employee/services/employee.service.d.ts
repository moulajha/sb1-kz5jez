import { Repository } from 'typeorm';
import { Employee } from '../../../entities/employee.entity';
export declare class EmployeeService {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(data: Partial<Employee>, tenantId: string): Promise<Employee>;
    findAll(tenantId: string): Promise<Employee[]>;
    findOne(id: string, tenantId: string): Promise<Employee>;
    update(id: string, data: Partial<Employee>, tenantId: string): Promise<Employee>;
    softDelete(id: string, tenantId: string): Promise<void>;
}
