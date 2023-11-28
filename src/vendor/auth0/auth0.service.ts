import { Injectable } from '@nestjs/common';
import { Auth } from '../../auth/auth.interface';
import { registerProvider } from '../../auth/auth.service.factory';

@Injectable()
export class Auth0Service implements Auth {
  constructor() {
    registerProvider(this);
  }

  getInfo(): string {
    return 'Info from Auth0';
  }
}
