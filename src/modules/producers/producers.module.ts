import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersController } from './controllers/producers.controller';
import { Producer } from './entities/producer.entity';
import { ProducersRepository } from './repos/producers.repository';
import { ProducersService } from './services/producers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producer])],
  controllers: [ProducersController],
  providers: [ProducersService, ProducersRepository],
  exports: [ProducersService],
})
export class ProducersModule {}
