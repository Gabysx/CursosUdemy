const notas = [6.7, 4.5, 7.5, 8.1,7.7]

for(let i in notas){
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Gaby',
  sobrenome: 'Candido',
  idade: 30,
  peso:64
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}