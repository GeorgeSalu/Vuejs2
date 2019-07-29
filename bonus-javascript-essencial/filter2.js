Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: "notebook", preco: 223, fragil: true },
    { nome: "ipad pro", preco: 600, fragil: true },
    { nome: "copo de vidro", preco: 22, fragil: true },
    { nome: "copo de platico", preco: 11, fragil: false }
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))