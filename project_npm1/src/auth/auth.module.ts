import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CatsModule } from 'src/cats/cats.module';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1y' },
    }),

    forwardRef(() => CatsModule), //캣츠 모듈의 export 된 것을 사용 가능하다.
    //forwardRef 로 순환종속 문제 해결
  ],
  providers: [AuthService, JwtAuthGuard, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
