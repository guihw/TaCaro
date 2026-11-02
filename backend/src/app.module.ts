import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { OfferModule } from './modules/offer/offer.module.js';

@Module({
  imports: [OfferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
