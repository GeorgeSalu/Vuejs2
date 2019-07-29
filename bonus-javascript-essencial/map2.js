const carrinho = [
    '{ "nome": "borracha", "preco": 2.33 }',
    '{ "nome": "caderno", "preco": 12.33 }',
    '{ "nome": "kit de lapis", "preco": 4.33 }',
    '{ "nome": "caneta", "preco": 22.33 }'
]

//retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)