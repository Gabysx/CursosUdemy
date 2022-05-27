const pessoa = {
  nome: 'Gaby',
  idade: 5,
  endereco: {
    logadouro: 'rua nsov',
    numero: 11
  }
}
const {nome,idade} = pessoa
console.log(nome, idade)

const {nome:n, idade: i} = pessoa 
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa 
console.log(sobrenome, bemHumorado)

const { endereco: {logadouro, numero, cep }} = pessoa
console.log(logadouro, numero, cep)