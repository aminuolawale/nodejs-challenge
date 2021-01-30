import { Injectable } from '@nestjs/common';
import { BaseResponse } from './app.dto';
@Injectable()
export class AppService {
  getHello(): BaseResponse {
    return {
      message: 'My Rule-Validation API',
      status: 'success',
      data: {
        name: 'Aminu Mohammed',
        github: '@aminuolawale',
        email: 'aminuolawalekan@gmail.com',
        mobile: '08111279627',
        twitter: '@aminuolawalekan',
      },
    };
  }
}
