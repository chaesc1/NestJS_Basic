import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {} //의존성 주입 패턴

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
