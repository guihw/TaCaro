import { Produto } from "../../Domain/produto.js";
import { ProdutoComAnuncio } from "../types/produto.types.js";
import { AnuncioMapper } from "./anuncio.mapper.js";

export class ProdutoMapper{
    static mapToDomain(raw: ProdutoComAnuncio):Produto{
        return new Produto(
            raw.id,
            raw.titulo,
            raw.especificacoes,
            raw.subcategoria.categoria?.nome_categoria || "outros",
            raw.subcategoria.nome_subcategoria,
            raw.anuncio.map(oferta => AnuncioMapper.mapToDomain(oferta))
        );
    }
}