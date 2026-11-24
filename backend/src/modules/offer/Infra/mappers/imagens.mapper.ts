import { Imagem } from "../../Domain/imagem.js";

export class ImagemMapper{
    static mapToDomain(raw: any): Imagem {
        return new Imagem(
            raw.id,
            raw.is_main,
            raw.url
        );
    }
}