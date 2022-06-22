const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0 ] = [10, 20, 30 ]

console.log(n1,n3,n5, n6)

const [, [, nota]]= [[ , 6, 41], [9, 8, 9]]
console.log(nota)