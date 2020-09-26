import { Test, TestingModule } from '@nestjs/testing';
import { TenancyController } from '../tenancy.controller';

describe('TenancyController', () => {
  let controller: TenancyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenancyController],
    }).compile();

    controller = module.get<TenancyController>(TenancyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
