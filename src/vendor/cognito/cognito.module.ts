import { Module } from '@nestjs/common';
import { AUTH_TOKEN } from '../../auth/auth.interface';
import { CognitoService } from './cognito.service';

@Module({
  providers: [
    {
      provide: AUTH_TOKEN,
      useClass: CognitoService,
    },
  ],
})
export class CognitoModule {}
