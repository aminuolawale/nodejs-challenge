import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidateRuleController } from './validate-rule/validate-rule.controller';

import { Request, Response, NextFunction } from 'express';

@Module({
  imports: [],
  controllers: [AppController, ValidateRuleController],
  providers: [AppService],
})
export class AppModule {}
