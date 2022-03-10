const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = ` 
Olá 
${nome}!` //interpulação
console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei ... ${up('cuidado')}!`)