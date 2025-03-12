import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertiesController } from './controllers/properties.controller';
import { Property } from './entities/property.entity';
import { PropertiesRepository } from './repos/properties.repository';
import { PropertiesService } from './services/properties.service';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [PropertiesController],
  providers: [PropertiesService, PropertiesRepository],
  exports: [PropertiesService],
})
export class PropertiesModule {}
