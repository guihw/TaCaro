import { Produto } from "../../Domain/produto.js";

export interface ProdutoRepository{
    findAllProdutos(): Promise<Produto[]>
}