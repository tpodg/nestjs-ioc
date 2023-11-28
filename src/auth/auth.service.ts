import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Auth, AUTH_TOKEN } from './auth.interface';

@Injectable()
export class AuthService implements OnModuleInit {
  private auth: Auth;

  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit(): any {
    this.auth = this.moduleRef.get(AUTH_TOKEN, { strict: false });
  }

  getInfo(): string {
    return this.auth.getInfo();
  }
}
