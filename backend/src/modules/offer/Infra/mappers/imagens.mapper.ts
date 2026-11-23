import { Imagem } from "../../Domain/imagem.js";

export class ImagemMapper{
    static mapToDomain(raw: Imagem): Imagem {
        return new Imagem(
            raw.id,
            raw.is_main,
            raw.url
        );
    }
}