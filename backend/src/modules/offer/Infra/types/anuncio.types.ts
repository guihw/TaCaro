import { Prisma } from "../../../../generated/prisma/client.js";

export type AnuncioComImagem = Prisma.anuncioGetPayload<{
    include: {
        images: true
    }
}>