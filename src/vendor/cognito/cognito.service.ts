import { Injectable } from '@nestjs/common';
import { Auth } from '../../auth/auth.interface';

@Injectable()
export class CognitoService implements Auth {
  getInfo(): string {
    return 'Info from Cognito';
  }
}
