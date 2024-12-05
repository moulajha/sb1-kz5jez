import { BaseEntity } from 'typeorm';
export declare abstract class EntityBase extends BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    tenantId: string;
}
