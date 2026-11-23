import { Produto } from "../../Domain/produto.js";

export class ProdutoMapper{
    static mapToDomain(raw: any):Produto{
        return new Produto(
            raw.id,
            raw.titulo,
            raw.especificacoes,
            raw.categoria,
            raw.subcategoria
        );
    }
}