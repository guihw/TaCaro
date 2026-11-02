import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module.js';
import { ListarAnuncios } from './Application/use-cases/listar-anuncios/listar-anuncios.js';
import { ANUNCIO_REPOSITORY } from './Application/ports/anuncio-repository.token.js';
import { PrismaAnuncioRepository } from './Infra/persistence/prisma-anuncio-repository.js';

@Module({
    imports: [PrismaModule],

    providers: [
        ListarAnuncios,
        {
            provide: ANUNCIO_REPOSITORY,
            useClass: PrismaAnuncioRepository
        }
    ]
})
export class OfferModule {}
