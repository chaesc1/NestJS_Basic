import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //비즈니스 로직 실행
    console.log('hello World');
    return 'Hello World!';
  }
}
