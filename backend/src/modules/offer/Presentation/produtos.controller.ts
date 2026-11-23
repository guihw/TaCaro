import { Controller, Get } from "@nestjs/common";
import { Produto } from "../Domain/produto.js";
import { ListarProduto } from "../Application/use-cases/listar-anuncios/listar-produtos.js";

@Controller('produtos')
export class ProdutosController{

    constructor(private readonly listarProdutos: ListarProduto){}

    @Get()
    async listar(): Promise<Produto[]>{
        return await this.listarProdutos.execute();
    }
}