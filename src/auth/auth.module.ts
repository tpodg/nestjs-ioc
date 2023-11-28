import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AUTH_TOKEN } from './auth.interface';
import { createProvider } from './auth.service.factory';

@Module({
  imports: [],
  providers: [
    {
      provide: AuthService,
      useFactory: () => createProvider(),
      inject: [AUTH_TOKEN],
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
