import { Anuncio } from "../../Domain/anuncio.js"

export interface AnuncioRepository{
    findAll(): Promise<Anuncio[]>
}