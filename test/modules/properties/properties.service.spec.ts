import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesRepository } from '../../../src/modules/properties/repos/properties.repository';
import { PropertiesService } from '../../../src/modules/properties/services/properties.service';

describe('PropertiesService', () => {
  let service: PropertiesService;

  const mockRepository = {
    createProperty: jest.fn(),
    findAllProperties: jest.fn(),
    findPropertyById: jest.fn(),
    updateProperty: jest.fn(),
    removeProperty: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropertiesService,
        {
          provide: PropertiesRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PropertiesService>(PropertiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call repository.createProperty', () => {
    service.create({ farmName: 'Fazenda Teste' });
    expect(mockRepository.createProperty).toHaveBeenCalled();
  });
});
