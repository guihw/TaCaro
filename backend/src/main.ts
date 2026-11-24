import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import "dotenv/config";

// Source - https://stackoverflow.com/a/78681416
// Posted by Aleksander Marek
// Retrieved 2026-11-23, License - CC BY-SA 4.0

declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () { return Number(this) }


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
await bootstrap();
