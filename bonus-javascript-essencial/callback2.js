const notas = [7.7, 6.5, 5.2, 8.9, 7.1, 9.0]

//sem usar o callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
