function soma() {
  let soma = 0
  for(i in arguments)(
    soma+= arguments[i]
  )
  return soma 
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.4,2.5,3.6))
console.log(soma(1.4,2.5,"Teste"))
console.log(soma('a','b','c'))
