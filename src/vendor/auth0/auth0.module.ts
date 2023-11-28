import { Module } from '@nestjs/common';
import { Auth0Service } from './auth0.service';
import { AUTH_TOKEN } from '../../auth/auth.interface';

@Module({
  providers: [
    {
      provide: AUTH_TOKEN,
      useClass: Auth0Service,
    },
  ],
})
export class Auth0Module {}
