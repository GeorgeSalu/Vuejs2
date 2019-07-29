// operador ...rest(juntar) / spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = { nome: 'maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

console.log(clone)

//spread com array
const grupoA = ['joao', 'pedro', 'maria']
const grupoFinal = ['maria', ...grupoA]
console.log(grupoFinal)
