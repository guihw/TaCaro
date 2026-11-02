export class Anuncio{
    public id: number;
    public titulo: string;
    public preco: number;
    public qntdVendidaUltimos7Dias: number;
    public qntdVendidaUltimos15Dias: number;
    public qntdVendidaUltimos30Dias: number;
    public qntdTotalVendida: number;
    public link: string;
    public marketplace: string;

    constructor(id: number, titulo: string, qntdVendidaUltimos7Dias: number, 
        qntdVendidaUltimos15Dias: number, qntdVendidaUltimos30Dias: number, 
        qntdTotalVendida: number, link: string, marketplace: string){
            this.id = id;
            this.titulo = titulo;
            this.qntdVendidaUltimos7Dias = qntdVendidaUltimos7Dias;
            this.qntdVendidaUltimos15Dias = qntdVendidaUltimos15Dias;
            this.qntdVendidaUltimos30Dias = qntdVendidaUltimos30Dias;
            this.qntdTotalVendida = qntdTotalVendida;
            this.link = link;
            this.marketplace = marketplace;
        }
}
