import { Module, Global } from '@nestjs/common';
import { TenantService } from './services/tenant.service';
import { TenantController } from './controllers/tenant.controller';

@Global()
@Module({
  controllers: [TenantController],
  providers: [TenantService],
  exports: [TenantService]
})
export class TenantModule {}