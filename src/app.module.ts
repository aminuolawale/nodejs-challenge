import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidateRuleController } from './validate-rule/validate-rule.controller';
import { EasterEggController } from './easter-egg/easter-egg.controller';

@Module({
  imports: [],
  controllers: [AppController, ValidateRuleController, EasterEggController],
  providers: [AppService],
})
export class AppModule {}
