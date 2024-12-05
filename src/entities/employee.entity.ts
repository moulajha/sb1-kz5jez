import { Entity, Column } from 'typeorm';
import { EntityBase } from './base.entity';

@Entity('employees')
export class Employee extends EntityBase {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  employeeId: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'date' })
  dateOfJoining: Date;

  @Column({ nullable: true })
  department: string;

  @Column({ nullable: true })
  designation: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'json', nullable: true })
  additionalInfo: Record<string, any>;
}