const prompt = require('prompt-sync')();

const num = Number(prompt('Digite um numero: '))

console.log('O antecessor do numero eh: ', num - 1 )
console.log('O sucessor do numero eh: ', num + 1 )
