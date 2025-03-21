import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  findProducerByCpfCnpj(cpfCnpj: string) {
    return this.repository.findOne({ where: { cpfCnpj } });
  }

  async updateProducer(id: string, data: any) {
    await this.repository.update(id, data);
    return this.findProducerById(id);
  }

  async removeProducer(id: string) {
    const producer = await this.repository.findOne({
      where: { id },
      relations: ['properties'],
    });
    if (!producer) {
      throw new NotFoundException('Producer não encontrado.');
    }
    if (producer.properties.length > 0) {
      throw new BadRequestException(
        'Não é possível excluir o producer pois existem properties vinculadas a ele.',
      );
    }
    return this.repository.remove(producer);
  }
}
