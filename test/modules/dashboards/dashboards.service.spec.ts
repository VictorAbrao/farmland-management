import { Test, TestingModule } from '@nestjs/testing';
import { DashboardsService } from '../../../src/modules/dashboards/services/dashboards.service';
import { ProducersService } from '../../../src/modules/producers/services/producers.service';
import { PropertiesService } from '../../../src/modules/properties/services/properties.service';

describe('DashboardsService', () => {
  let service: DashboardsService;

  const mockProducersService = {};
  const mockPropertiesService = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DashboardsService,
        { provide: ProducersService, useValue: mockProducersService },
        { provide: PropertiesService, useValue: mockPropertiesService },
      ],
    }).compile();

    service = module.get<DashboardsService>(DashboardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
