import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: join(process.cwd(), 'data', 'app.sqlite'),
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  entities: [join(__dirname, '..', '..', '..', 'entities', '*.entity{.ts,.js}')],
  migrations: [join(__dirname, '..', '..', '..', 'migrations', '*{.ts,.js}')],
  extra: {
    // SQLite specific options
    pragma: [
      'PRAGMA journal_mode = WAL',
      'PRAGMA synchronous = NORMAL'
    ]
  }
};