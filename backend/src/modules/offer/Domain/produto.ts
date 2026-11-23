export class Produto{
    id: number;
    titulo: string;
    especificacoes: string;
    categoria: string;
    subcategoria: string;

    constructor(id:number, titulo: string, especificacoes: string, categoria: string, subcategoria: string){
        this.id = id;
        this.titulo = titulo;
        this.especificacoes = especificacoes;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
    }
}