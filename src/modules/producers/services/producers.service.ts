import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { validateCPForCNPJ } from '../../utils/validate-cpf-cnpj';
import { ProducersRepository } from '../repos/producers.repository';

@Injectable()
export class ProducersService {
  constructor(private readonly producersRepository: ProducersRepository) {}

  async create(data: any) {
    if (!validateCPForCNPJ(data.cpfCnpj)) {
      throw new BadRequestException('CPF/CNPJ inválido');
    }
    const existing = await this.producersRepository.findProducerByCpfCnpj(
      data.cpfCnpj,
    );
    if (existing) {
      throw new ConflictException('CPF/CNPJ já cadastrado');
    }
    return this.producersRepository.createProducer(data);
  }

  findAll() {
    return this.producersRepository.findAllProducers();
  }

  findOne(id: string) {
    return this.producersRepository.findProducerById(id);
  }

  async update(id: string, data: any) {
    if (data.cpfCnpj && !validateCPForCNPJ(data.cpfCnpj)) {
      throw new BadRequestException('CPF/CNPJ inválido');
    }
    if (data.cpfCnpj) {
      const existing = await this.producersRepository.findProducerByCpfCnpj(
        data.cpfCnpj,
      );
      if (existing && existing.id !== id) {
        throw new ConflictException('CPF/CNPJ já cadastrado');
      }
    }
    return this.producersRepository.updateProducer(id, data);
  }

  remove(id: string) {
    return this.producersRepository.removeProducer(id);
  }
}
