import { Controller, Get } from "@nestjs/common";
import { Anuncio } from "../Domain/anuncio.js";
import { ListarAnuncios } from "../Application/use-cases/listar-anuncios/listar-anuncios.js";

@Controller('anuncios')
export class AnunciosController{
    constructor(private readonly listarAnuncios: ListarAnuncios){}

    @Get()
    async listar(): Promise<Anuncio[]>{
        return await this.listarAnuncios.execute();
    }
}