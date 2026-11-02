import { Inject, Injectable } from "@nestjs/common";
import type { AnuncioRepository } from "../../ports/anuncio-repository.js";
import { ANUNCIO_REPOSITORY } from "../../ports/anuncio-repository.token.js";

@Injectable()
export class ListarAnuncios{
    constructor(
        @Inject(ANUNCIO_REPOSITORY)
        private readonly repository: AnuncioRepository
    ){}

    async execute(){
        return this.repository.findAll();
    }
}