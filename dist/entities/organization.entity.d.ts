import { EntityBase } from './base.entity';
export declare class Organization extends EntityBase {
    name: string;
    address: string;
    phone: string;
    email: string;
    settings: {
        workingDays: string[];
        workingHours: {
            start: string;
            end: string;
        };
        timezone: string;
    };
    isActive: boolean;
}
