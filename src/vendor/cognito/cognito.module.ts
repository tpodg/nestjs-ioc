import { Global, Module } from '@nestjs/common';
import { AUTH_TOKEN } from '../../auth/auth.interface';
import { CognitoService } from './cognito.service';
import { ConfigurableModuleClass } from '@nestjs/common/cache/cache.module-definition';

@Global()
@Module({
  providers: [
    {
      provide: AUTH_TOKEN,
      useClass: CognitoService,
    },
  ],
  exports: [AUTH_TOKEN],
})
export class CognitoModule extends ConfigurableModuleClass {}
