import { Injectable } from "@nestjs/common";
import { ProdutoRepository } from "../../Application/ports/produto-repository.js";
import { Produto } from "../../Domain/produto.js";
import { PrismaService } from "../../../../database/prisma.service.js";
import { ProdutoMapper } from "../mappers/produto.mapper.js";

@Injectable()
export class PrismaProdutoRepository implements ProdutoRepository{
    constructor(private readonly prisma: PrismaService){}
    async findAllProdutos(): Promise<Produto[]> {
        const produtos = await this.prisma.produto.findMany({include: 
            { 
                subcategoria: {
                    include: { categoria: true }
                },
                anuncio: {
                    include: { images: true }
                }
            }});

        return produtos.map(produto => ProdutoMapper.mapToDomain(produto));
    }
}