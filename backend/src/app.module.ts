import { Module } from '@nestjs/common';
import { OfferModule } from './modules/offer/offer.module.js';

@Module({
  imports: [OfferModule],
})
export class AppModule {}
