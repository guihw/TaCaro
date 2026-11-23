export class Imagem{
    public id: bigint;
    public is_main: boolean;
    public url: string;

    constructor(id: bigint, is_main: boolean, url: string){
        this.id = id;
        this.is_main = is_main;
        this.url = url;
    }
}