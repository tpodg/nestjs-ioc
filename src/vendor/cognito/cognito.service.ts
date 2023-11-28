import { Injectable } from '@nestjs/common';
import { Auth } from '../../auth/auth.interface';
import { registerProvider } from '../../auth/auth.service.factory';

@Injectable()
export class CognitoService implements Auth {
  constructor() {
    registerProvider(this);
  }

  getInfo(): string {
    return 'Info from Cognito';
  }
}
