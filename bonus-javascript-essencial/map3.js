Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0;i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "borracha", "preco": 2.33 }',
    '{ "nome": "caderno", "preco": 12.33 }',
    '{ "nome": "kit de lapis", "preco": 4.33 }',
    '{ "nome": "caneta", "preco": 22.33 }'
]

//retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)