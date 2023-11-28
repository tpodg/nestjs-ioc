import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [AuthModule, VendorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
