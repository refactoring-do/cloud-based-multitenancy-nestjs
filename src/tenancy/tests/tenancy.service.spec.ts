import { Test, TestingModule } from '@nestjs/testing';
import { TenancyService } from '../tenancy.service';

describe('TenancyService', () => {
  let service: TenancyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenancyService],
    }).compile();

    service = module.get<TenancyService>(TenancyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
