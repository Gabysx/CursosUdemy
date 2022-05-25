const valores =  [7.7, 7.8, 7.9, 8.9, 9.2]

console.log(valores[0], valores[6])
console.log(valores[1])

valores[6] = 10 //adiciona elemento no array
console.log(valores[6])
console.log(valores.length) //mostra a quantidade de elementos dentro do array

valores.push({id: 3}, false, null, 'teste') // adiciona valores JS é de tipagem fraca podendo misturar os tipos, porém não uma boa prática 
console.log(valores)

console.log(valores.pop) // elimina o ultimo valor da array 
delete valores[0] // deleta o valor do indice indicado 

console.log(typeof valores) // estrutura identificada 
