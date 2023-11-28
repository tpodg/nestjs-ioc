import { Injectable } from '@nestjs/common';
import { Auth } from '../../auth/auth.interface';

@Injectable()
export class Auth0Service implements Auth {
  getInfo(): string {
    return 'Info from Auth0';
  }
}
