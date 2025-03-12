import { Injectable } from '@nestjs/common';
import { ProducersService } from '../../producers/services/producers.service';
import { PropertiesService } from '../../properties/services/properties.service';

@Injectable()
export class DashboardsService {
  constructor(
    private readonly producersService: ProducersService,
    private readonly propertiesService: PropertiesService,
  ) {}

  async getSummary() {
    const properties = await this.propertiesService.findAll();
    return {
      totalFarms: properties.length,
      totalHectares: properties.reduce((acc, prop) => acc + prop.totalArea, 0),
    };
  }

  async getByState(state?: string) {
    const properties = await this.propertiesService.findAll();
    const filtered = state
      ? properties.filter((p) => p.state === state)
      : properties;
    const map: Record<string, number> = {};
    for (const prop of filtered) {
      map[prop.state] = (map[prop.state] || 0) + 1;
    }
    return map;
  }

  async getByCulture(culture?: string) {
    const properties = await this.propertiesService.findAll();
    const result: Record<string, number> = {};
    for (const prop of properties) {
      for (const c of prop.crops) {
        if (!culture || c === culture) {
          if (!result[c]) {
            result[c] = 0;
          }
          result[c]++;
        }
      }
    }
    return result;
  }

  async getLandUse() {
    const properties = await this.propertiesService.findAll();
    const totalArable = properties.reduce(
      (acc, prop) => acc + prop.arableArea,
      0,
    );
    const totalVegetation = properties.reduce(
      (acc, prop) => acc + prop.vegetationArea,
      0,
    );
    return {
      arableArea: totalArable,
      vegetationArea: totalVegetation,
    };
  }
}
