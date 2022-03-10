const escola = "Gabi3iuevpqvfeçi"

console.log(escola.charAt(2))//retorna a letra do particionamento do array da string 
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3)) //cod unicode 
console.log(escola.indexOf('4')) //


console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))// concatenação
console.log('Escola ' + escola + "!") //concatenação

console.log(escola.replace(/\d/, 'e'))// regx estudar depois (*)
console.log(escola.replace(3, 'e'))// regx estudar depois (*)

console.log('Ana, Maria, Pedro'.split(',')) //  tranforma em arrays
console.log('Ana, Maria, Pedro'.split(/./)) //  regx
