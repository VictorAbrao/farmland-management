import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../entities/property.entity';

@Injectable()
export class PropertiesRepository {
  constructor(
    @InjectRepository(Property)
    private repository: Repository<Property>,
  ) {}

  createProperty(data: any) {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  findAllProperties() {
    return this.repository.find({ relations: ['producer'] });
  }

  findPropertyById(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['producer'] });
  }

  async updateProperty(id: string, data: any) {
    await this.repository.update(id, data);
    return this.findPropertyById(id);
  }

  removeProperty(id: string) {
    return this.repository.delete(id);
  }
}
