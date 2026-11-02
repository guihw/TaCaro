import { Injectable } from "@nestjs/common";
import { AnuncioRepository } from "../../Application/ports/anuncio-repository.js";
import { Anuncio } from "../../Domain/anuncio.js";
import { PrismaClient } from "../../../../generated/prisma/client.js";
import { PrismaService } from "../../../../database/prisma.service.js";

@Injectable()
export class PrismaAnuncioRepository implements AnuncioRepository{
    constructor(
        private readonly prisma: PrismaService
    ){}

    async findAll(): Promise<Anuncio[]> {
        const anuncios = await this.prisma.anuncio.findMany();

        return anuncios;
        //return anuncios.map(anuncio => )
    }
}