const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
console.log(concatenacao)

//usando template
const template = `
      Ola
            ${nome}!`

console.log(template)

const templateTwo = `
      Ola ${nome}!`

console.log(templateTwo)

// expressoes....
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)