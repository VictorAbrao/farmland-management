import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesController } from '../../src/modules/properties/controllers/properties.controller';
import { PropertiesService } from '../../src/modules/properties/services/properties.service';

describe('PropertiesController', () => {
  let controller: PropertiesController;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
      providers: [
        {
          provide: PropertiesService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<PropertiesController>(PropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.create', () => {
    controller.create({ farmName: 'Fazenda Teste' });
    expect(mockService.create).toHaveBeenCalled();
  });
});
