const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//da o valor da tabela unicode da letra ou numero na posiçao 3
console.log(escola.indexOf('c'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('escola '.concat(escola).concat(' !'))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))//substituir a string por array c virgula