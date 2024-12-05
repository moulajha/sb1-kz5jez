import { EntityBase } from './base.entity';
export declare class Employee extends EntityBase {
    firstName: string;
    lastName: string;
    employeeId: string;
    email: string;
    phone: string;
    dateOfJoining: Date;
    department: string;
    designation: string;
    isActive: boolean;
    additionalInfo: Record<string, any>;
}
