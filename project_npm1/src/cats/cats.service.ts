import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CatRequestDto } from 'src/dto/cats.request.dto';
import { Cat } from './cats.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);

    //유효성 검사
    if (isCatExist) {
      throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.');
      // throw new HttpException('해당하는 고양이는 이미 존재합니다.', 403); 위와 같은 코드. 403 에러 발생 코드
    }

    //패스워드 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
