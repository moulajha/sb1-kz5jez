"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const path_1 = require("path");
const employee_entity_1 = require("../entities/employee.entity");
const organization_entity_1 = require("../entities/organization.entity");
const department_entity_1 = require("../entities/department.entity");
exports.databaseConfig = {
    type: 'sqlite',
    database: (0, path_1.join)(process.cwd(), 'data', 'app.sqlite'),
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    entities: [employee_entity_1.Employee, organization_entity_1.Organization, department_entity_1.Department],
    migrations: [(0, path_1.join)(__dirname, '..', 'migrations', '*{.ts,.js}')],
    extra: {
        pragmas: {
            journal_mode: 'WAL',
            synchronous: 'NORMAL'
        }
    }
};
//# sourceMappingURL=database.config.js.map