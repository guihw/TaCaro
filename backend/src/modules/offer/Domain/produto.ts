import { Anuncio } from "./anuncio.js";

export class Produto{
    id: bigint;
    titulo: string;
    especificacoes: string;
    categoria: string;
    subcategoria: string;
    ofertas: Anuncio[];

    constructor(id: bigint, titulo: string, especificacoes: string, categoria: string, subcategoria: string, ofertas: Anuncio[]){
        this.id = id;
        this.titulo = titulo;
        this.especificacoes = especificacoes;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.ofertas = ofertas;
    }
}