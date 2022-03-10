const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao = 9.871
const avaliacao2 = 6.871

const  total  = avaliacao * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //limita as casas decimais 
console.log(media.toString(2)) // transforma em numero binário
console.log(typeof media) // number tipo do dado 
console.log(typeof Number) // Number é função