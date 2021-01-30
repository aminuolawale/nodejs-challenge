import { Test, TestingModule } from '@nestjs/testing';
import { ValidateRuleController } from './validate-rule.controller';

describe('ValidateRuleController', () => {
  let controller: ValidateRuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidateRuleController],
    }).compile();

    controller = module.get<ValidateRuleController>(ValidateRuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
