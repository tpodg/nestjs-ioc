import { Inject, Injectable } from '@nestjs/common';
import { Auth, AUTH_TOKEN } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_TOKEN) private readonly auth: Auth) {}

  getInfo(): string {
    return this.auth.getInfo();
  }
}
