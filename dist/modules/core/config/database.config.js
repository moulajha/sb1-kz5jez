"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const path_1 = require("path");
exports.databaseConfig = {
    type: 'sqlite',
    database: (0, path_1.join)(process.cwd(), 'data', 'app.sqlite'),
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    entities: [(0, path_1.join)(__dirname, '..', '..', '..', 'entities', '*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, '..', '..', '..', 'migrations', '*{.ts,.js}')],
    extra: {
        pragma: [
            'PRAGMA journal_mode = WAL',
            'PRAGMA synchronous = NORMAL'
        ]
    }
};
//# sourceMappingURL=database.config.js.map