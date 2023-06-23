import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {} //의존성 주입 패턴

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
