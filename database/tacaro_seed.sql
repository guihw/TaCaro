-- TaCaro: dados sintéticos para desenvolvimento (PostgreSQL)
-- Compatível com o esquema atual: categoria, subcategoria, produto, anuncio, images.
-- ATENÇÃO: limpa os dados existentes dessas cinco tabelas antes de popular.
-- Execute em um banco de desenvolvimento, nunca em produção.

BEGIN;

TRUNCATE TABLE images, anuncio, produto, subcategoria, categoria
RESTART IDENTITY CASCADE;

-- 1) Categorias
INSERT INTO categoria (id, nome_categoria)
SELECT i, nome
FROM unnest(ARRAY[
    'Eletrônicos', 'Informática', 'Casa e Cozinha', 'Eletrodomésticos',
    'Games', 'Áudio', 'Celulares', 'Esportes', 'Ferramentas',
    'Beleza e Cuidados', 'Livros e Papelaria', 'Acessórios'
]) WITH ORDINALITY AS t(nome, i);

-- 2) Subcategorias: cinco para cada categoria
INSERT INTO subcategoria (id, nome_subcategoria, categoria_id)
SELECT (c.id - 1) * 5 + s.n,
       s.nome,
       c.id
FROM categoria c
CROSS JOIN LATERAL (
    SELECT *
    FROM unnest(ARRAY[
        'Básicos', 'Intermediários', 'Premium', 'Portáteis', 'Acessórios'
    ]) WITH ORDINALITY AS x(nome, n)
) s;

-- 3) Produtos: 10.000 produtos sintéticos com títulos variados.
-- EANs não foram incluídos porque sua tabela atual não possui coluna EAN.
INSERT INTO produto (id, titulo, especificacoes, subcategoria_id)
SELECT
    g,
    (ARRAY[
        'Fone Bluetooth', 'Teclado Mecânico', 'Mouse Sem Fio',
        'Monitor LED', 'Notebook', 'Smartphone', 'Caixa de Som',
        'Carregador USB-C', 'Liquidificador', 'Cafeteira',
        'Air Fryer', 'Controle Sem Fio', 'SSD NVMe', 'Roteador Wi-Fi',
        'Webcam Full HD', 'Headset Gamer', 'Smartwatch', 'Tablet',
        'Luminária LED', 'Aspirador de Pó'
    ])[((g - 1) % 20) + 1]
    || ' Modelo ' || lpad(g::text, 5, '0')
    || ' ' || (ARRAY['Preto', 'Branco', 'Prata', 'Azul', 'Cinza'])[((g - 1) % 5) + 1],
    jsonb_build_object(
        'marca', (ARRAY['Nexa', 'Voltix', 'Aurora', 'MobiTech', 'CasaNova', 'PixelPro'])[((g - 1) % 6) + 1],
        'modelo', 'TC-' || lpad(g::text, 5, '0'),
        'cor', (ARRAY['Preto', 'Branco', 'Prata', 'Azul', 'Cinza'])[((g - 1) % 5) + 1],
        'garantia_meses', (ARRAY[12, 12, 24, 6, 18])[((g - 1) % 5) + 1],
        'origem_dados', 'synthetic'
    )::text,
    ((g - 1) % 60) + 1
FROM generate_series(1, 10000) AS gs(g);

-- 4) Anúncios: 2 a 3 por produto, distribuídos entre marketplaces.
INSERT INTO anuncio (id, produto_id, preco, link_anuncio, marketplace)
SELECT
    ((p.id - 1) * 3) + a.n AS id,
    p.id AS produto_id,
    round((
        (40 + ((p.id * 17 + a.n * 31) % 1800))::numeric
        * CASE a.n
            WHEN 1 THEN 1.00
            WHEN 2 THEN 0.92
            ELSE 1.08
          END
    ), 2) AS preco,
    'https://example.test/' ||
        lower(replace(a.marketplace, ' ', '-')) ||
        '/item-' || p.id || '-' || a.n AS link_anuncio,
    a.marketplace
FROM produto p
CROSS JOIN LATERAL (
    SELECT n, marketplace
    FROM (VALUES
        (1, 'Mercado Livre'),
        (2, 'Amazon'),
        (3, 'Magazine Luiza')
    ) AS m(n, marketplace)
    -- Deixa alguns produtos com apenas dois anúncios para simular cobertura desigual.
    WHERE n <= CASE WHEN p.id % 5 = 0 THEN 2 ELSE 3 END
) a;

-- 5) Imagens: duas por anúncio; a primeira é a principal.
INSERT INTO images (id, is_main, anuncio_id, url)
SELECT
    (a.id - 1) * 2 + im.n AS id,
    (im.n = 1) AS is_main,
    a.id AS anuncio_id,
    'https://images.example.test/products/' ||
        a.produto_id || '/offer-' || a.id || '-' || im.n || '.jpg' AS url
FROM anuncio a
CROSS JOIN generate_series(1, 2) AS im(n);

COMMIT;

-- Atualize estatísticas para o otimizador do PostgreSQL.
ANALYZE categoria;
ANALYZE subcategoria;
ANALYZE produto;
ANALYZE anuncio;
ANALYZE images;

-- Conferência rápida:
SELECT 'categoria' AS tabela, count(*) AS registros FROM categoria
UNION ALL SELECT 'subcategoria', count(*) FROM subcategoria
UNION ALL SELECT 'produto', count(*) FROM produto
UNION ALL SELECT 'anuncio', count(*) FROM anuncio
UNION ALL SELECT 'images', count(*) FROM images
ORDER BY tabela;
