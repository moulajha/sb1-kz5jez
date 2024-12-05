import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Employee } from '../entities/employee.entity';
import { Organization } from '../entities/organization.entity';
import { Department } from '../entities/department.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: join(process.cwd(), 'data', 'app.sqlite'),
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  entities: [Employee, Organization, Department],
  migrations: [join(__dirname, '..', 'migrations', '*{.ts,.js}')],
  extra: {
    // SQLite specific options
    pragmas: {
      journal_mode: 'WAL',
      synchronous: 'NORMAL'
    }
  }
};