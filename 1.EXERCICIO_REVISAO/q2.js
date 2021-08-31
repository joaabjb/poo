const prompt = require('prompt-sync')();

const valor = Number(prompt('Digite o valor que deseja converter: '))
const dolar = Number(prompt('Digite o valor do dolar: '))

const num = valor * dolar

console.log("O valor em R$ eh: ", num)