import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from '../jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: 'WHn9ZPXp3WjLbItLci61xqenGEnZSko5',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}
