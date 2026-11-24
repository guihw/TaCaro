import { Prisma } from "../../../../generated/prisma/client.js";

export type ProdutoComAnuncio = Prisma.produtoGetPayload<{
    include: {
        subcategoria: {
            include: { categoria: true}
        },
        anuncio: {
            include: { images: true }
        }
    }
}>;