import { Entity, Column } from 'typeorm';
import { EntityBase } from './base.entity';

@Entity('departments')
export class Department extends EntityBase {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  managerId: string;

  @Column({ default: true })
  isActive: boolean;
}