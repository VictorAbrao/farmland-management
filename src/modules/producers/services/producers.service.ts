import { Injectable } from '@nestjs/common';
import { ProducersRepository } from '../repos/producers.repository';

@Injectable()
export class ProducersService {
  constructor(private readonly producersRepository: ProducersRepository) {}

  create(data: any) {
    return this.producersRepository.createProducer(data);
  }

  findAll() {
    return this.producersRepository.findAllProducers();
  }

  findOne(id: string) {
    return this.producersRepository.findProducerById(id);
  }

  update(id: string, data: any) {
    return this.producersRepository.updateProducer(id, data);
  }

  remove(id: string) {
    return this.producersRepository.removeProducer(id);
  }
}
