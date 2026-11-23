import { Imagem } from "./imagem.js";

export class Anuncio{
    public id: bigint;
    public preco: number;
    public link: string;
    public marketplace: string;
    public images: Imagem[];

    constructor(id: bigint, link: string, preco: number, marketplace: string, images: Imagem[]){
            this.id = id;
            this.link = link;
            this.preco = preco;
            this.marketplace = marketplace;
            this.images = images;
        }
}
