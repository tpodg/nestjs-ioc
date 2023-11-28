import { Module } from '@nestjs/common';
import { CognitoModule } from './cognito/cognito.module';

@Module({
  imports: [CognitoModule],
})
export class VendorModule {}
