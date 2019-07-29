const produtos = [
    { nome: "notebook", preco: 223, fragil: true },
    { nome: "ipad pro", preco: 600, fragil: true },
    { nome: "copo de vidro", preco: 22, fragil: true },
    { nome: "copo de platico", preco: 11, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))