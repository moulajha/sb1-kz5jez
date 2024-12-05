"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const app_config_1 = require("./config/app.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe(app_config_1.validationConfig));
    await app.listen(app_config_1.serverConfig.port);
    console.log(`Server running on http://${app_config_1.serverConfig.host}:${app_config_1.serverConfig.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map