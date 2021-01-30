import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
  HttpCode,
  Req,
} from '@nestjs/common';
import { ValidateRule } from './dto/validate-rule.dto';
import { BaseResponse } from '../app.dto';
import { validateFields, getFieldValue, useRule } from './validate-rule.utils';

@Controller('validate-rule')
export class ValidateRuleController {
  @Post()
  @HttpCode(200)
  validateRule(@Body() validateRule: ValidateRule, @Req() req): BaseResponse {
    const validation = validateFields(validateRule);
    if (!validation.ok) {
      throw new HttpException(
        {
          message: validation.message,
          status: 'error',
          data: null,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const cond = validateRule.rule.condition;
    const condVal = validateRule.rule.condition_value;
    const fieldName = validateRule.rule.field;
    const fieldVal = getFieldValue(validateRule.data, fieldName);
    const ok = useRule(cond, condVal, fieldVal);
    if (!ok) {
      throw new HttpException(
        {
          message: `field ${fieldName} failed validation.`,
          status: 'error',
          data: {
            validation: {
              error: true,
              field: fieldName,
              field_value: fieldVal,
              condition: cond,
              condition_value: condVal,
            },
          },
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      message: `field ${fieldName} successfully validated.`,
      status: 'success',
      data: {
        validation: {
          error: false,
          field: fieldName,
          field_value: fieldVal,
          condition: cond,
          condition_value: condVal,
        },
      },
    };
  }
}
