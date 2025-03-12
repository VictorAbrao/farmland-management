import { Injectable } from '@nestjs/common';
import { PropertiesRepository } from '../repos/properties.repository';

@Injectable()
export class PropertiesService {
  constructor(private readonly propertiesRepository: PropertiesRepository) {}

  create(data: any) {
    return this.propertiesRepository.createProperty(data);
  }

  findAll() {
    return this.propertiesRepository.findAllProperties();
  }

  findOne(id: string) {
    return this.propertiesRepository.findPropertyById(id);
  }

  update(id: string, data: any) {
    return this.propertiesRepository.updateProperty(id, data);
  }

  remove(id: string) {
    return this.propertiesRepository.removeProperty(id);
  }
}
