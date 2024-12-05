import { Entity, Column } from 'typeorm';
import { EntityBase } from './base.entity';

@Entity('organizations')
export class Organization extends EntityBase {
  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'json', nullable: true })
  settings: {
    workingDays: string[];
    workingHours: {
      start: string;
      end: string;
    };
    timezone: string;
  };

  @Column({ default: true })
  isActive: boolean;
}