import { Controller, Get } from '@nestjs/common';

@Controller('easter-egg')
export class EasterEggController {
  @Get()
  easterEgg(): string {
    return 'https://res.cloudinary.com/riceev/video/upload/v1611977527/easter-egg_b1bqyf.webm';
  }
}
