import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardsModule } from './modules/dashboards/dashboards.module';
import { LoggerService } from './modules/logs/logger.service';
import { ProducersModule } from './modules/producers/producers.module';
import { PropertiesModule } from './modules/properties/properties.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'farmland',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProducersModule,
    PropertiesModule,
    DashboardsModule,
  ],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class AppModule {}
