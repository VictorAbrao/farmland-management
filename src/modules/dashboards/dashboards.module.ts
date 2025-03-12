import { Module } from '@nestjs/common';
import { ProducersModule } from '../producers/producers.module';
import { PropertiesModule } from '../properties/properties.module';
import { DashboardsController } from './controllers/dashboards.controller';
import { DashboardsService } from './services/dashboards.service';

@Module({
  imports: [ProducersModule, PropertiesModule],
  controllers: [DashboardsController],
  providers: [DashboardsService],
})
export class DashboardsModule {}
