import { Test, TestingModule } from '@nestjs/testing';
import { EasterEggController } from './easter-egg.controller';

describe('EasterEggController', () => {
  let controller: EasterEggController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EasterEggController],
    }).compile();

    controller = module.get<EasterEggController>(EasterEggController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
