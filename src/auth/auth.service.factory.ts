import { Auth } from './auth.interface';

let provider: Auth;

export function registerProvider(p: Auth) {
  provider = p;
}

export function createProvider(): Auth {
  return provider;
}
