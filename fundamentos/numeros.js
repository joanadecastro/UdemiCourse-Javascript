const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

//saber se o valor de peso1 é inteiro ou nao
console.log(Number.isInteger(peso1))//é valor inteiro logo true
console.log(Number.isInteger(peso2))//é valor inteiro logo true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(5))
console.log(typeof media)

/*tudo isto são funçoes...aqui number e media sao funçoes
Number.tofixed
Number.isInteger
media.toString */