import { Module, MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';
import { CoreModule } from './modules/core/core.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { TenantMiddleware } from './middleware/tenant.middleware';
import { TenantInterceptor } from './common/interceptors/tenant.interceptor';
import { TenantGuard } from './common/guards/tenant.guard';

@Module({
  imports: [
    CoreModule,
    TenantModule,
    EmployeeModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TenantInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: TenantGuard,
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .forRoutes('*');
  }
}