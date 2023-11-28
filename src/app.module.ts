import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CognitoModule } from './vendor/cognito/cognito.module';

@Module({
  imports: [AuthModule, CognitoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
