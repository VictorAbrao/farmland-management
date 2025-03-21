import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../entities/property.entity';

@Injectable()
export class PropertiesRepository {
  constructor(
    @InjectRepository(Property)
    private repository: Repository<Property>,
  ) {}

  private validateAreas(
    arableArea: number,
    vegetationArea: number,
    totalArea: number,
  ) {
    if (arableArea + vegetationArea > totalArea) {
      throw new BadRequestException(
        'A soma das áreas agricultável e de vegetação não pode exceder a área total.',
      );
    }
  }

  async createProperty(data: any) {
    this.validateAreas(data.arableArea, data.vegetationArea, data.totalArea);
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
    const property = await this.repository.findOne({ where: { id } });
    if (!property) {
      throw new BadRequestException('Propriedade não encontrada.');
    }
    const updatedArableArea =
      data.arableArea !== undefined ? data.arableArea : property.arableArea;
    const updatedVegetationArea =
      data.vegetationArea !== undefined
        ? data.vegetationArea
        : property.vegetationArea;
    const updatedTotalArea =
      data.totalArea !== undefined ? data.totalArea : property.totalArea;

    this.validateAreas(
      updatedArableArea,
      updatedVegetationArea,
      updatedTotalArea,
    );

    await this.repository.update(id, data);
    return this.findPropertyById(id);
  }

  removeProperty(id: string) {
    return this.repository.delete(id);
  }
}
