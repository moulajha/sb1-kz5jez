"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConfig = exports.validationConfig = void 0;
exports.validationConfig = {
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
};
exports.serverConfig = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
};
//# sourceMappingURL=app.config.js.map