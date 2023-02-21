import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import {ApiController} from "./api/api.controller";

@Module({
  imports: [ApiModule],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
