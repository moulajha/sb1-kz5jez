import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../../entities/employee.entity';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(data: Partial<Employee>, tenantId: string): Promise<Employee>;
    findAll(tenantId: string): Promise<Employee[]>;
    findOne(id: string, tenantId: string): Promise<Employee>;
    update(id: string, data: Partial<Employee>, tenantId: string): Promise<Employee>;
    remove(id: string, tenantId: string): Promise<void>;
}
