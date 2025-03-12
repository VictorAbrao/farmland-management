import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producer } from '../entities/producer.entity';

@Injectable()
export class ProducersRepository {
  constructor(
    @InjectRepository(Producer)
    private repository: Repository<Producer>,
  ) {}

  createProducer(data: any) {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  findAllProducers() {
    return this.repository.find();
  }

  findProducerById(id: string) {
    return this.repository.findOne({ where: { id } });
  }

  async updateProducer(id: string, data: any) {
    await this.repository.update(id, data);
    return this.findProducerById(id);
  }

  removeProducer(id: string) {
    return this.repository.delete(id);
  }
}
