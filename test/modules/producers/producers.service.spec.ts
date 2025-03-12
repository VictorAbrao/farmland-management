import { Test, TestingModule } from '@nestjs/testing';
import { ProducersRepository } from '../../../src/modules/producers/repos/producers.repository';
import { ProducersService } from '../../../src/modules/producers/services/producers.service';

describe('ProducersService', () => {
  let service: ProducersService;

  const mockRepository = {
    createProducer: jest.fn(),
    findAllProducers: jest.fn(),
    findProducerById: jest.fn(),
    updateProducer: jest.fn(),
    removeProducer: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProducersService,
        {
          provide: ProducersRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProducersService>(ProducersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call repository.createProducer', () => {
    service.create({ name: 'teste' });
    expect(mockRepository.createProducer).toHaveBeenCalled();
  });
});
