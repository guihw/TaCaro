import { Inject, Injectable } from "@nestjs/common";
import { PRODUTO_REPOSITORY } from "../../ports/produto-repository.token.js";
import type { ProdutoRepository } from "../../ports/produto-repository.js";

@Injectable()
export class ListarProduto{
    constructor(
        @Inject(PRODUTO_REPOSITORY) 
        private readonly produtoRepository: ProdutoRepository
    ){}

    async execute(){
        return this.produtoRepository.findAllProdutos();
    }
}