import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module.js';
import { ListarAnuncios } from './Application/use-cases/listar-anuncios/listar-anuncios.js';
import { ANUNCIO_REPOSITORY } from './Application/ports/anuncio-repository.token.js';
import { PrismaAnuncioRepository } from './Infra/persistence/prisma-anuncio-repository.js';
import { PRODUTO_REPOSITORY } from './Application/ports/produto-repository.token.js';
import { ListarProduto } from './Application/use-cases/listar-anuncios/listar-produtos.js';
import { PrismaProdutoRepository } from './Infra/persistence/prisma-produto-repositoty.js';
import { AnunciosController } from './Presentation/anuncios.controller.js';
import { ProdutosController } from './Presentation/produtos.controller.js';

@Module({
    controllers: [AnunciosController, ProdutosController],
    imports: [PrismaModule],

    providers: [
        ListarProduto,
        {
            provide: PRODUTO_REPOSITORY,
            useClass: PrismaProdutoRepository
        },
        ListarAnuncios,
        {
            provide: ANUNCIO_REPOSITORY,
            useClass: PrismaAnuncioRepository
        }
    ]
})
export class OfferModule {}
