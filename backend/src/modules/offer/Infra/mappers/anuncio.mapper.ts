import { Anuncio } from "../../Domain/anuncio.js";
import { AnuncioComImagem } from "../types/anuncio.types.js";
import { ImagemMapper } from "./imagens.mapper.js";

export class AnuncioMapper{
    static mapToDomain(raw: AnuncioComImagem): Anuncio{
        return new Anuncio(
            raw.id, 
            raw.link_anuncio??"Sem link", 
            Number(raw.preco),
            raw.marketplace??"Desconhecido", 
            raw.images.map(imagem => ImagemMapper.mapToDomain(imagem))
        );
    }    
} 