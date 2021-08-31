const prompt = require('prompt-sync')();

const num1 = Number(prompt('Digite o primeiro numero: '))
const num2 = Number(prompt('Digite o segundo numero: '))
const num3 = Number(prompt('Digite o terceiro numero: '))

if(num1 > num2 && num1 > num3){
    console.log('O numero', num1, 'é o maior')
}
else if (num2 > num1 && num2 > num3){
    console.log('O numero', num2, 'é o maior')
}
else{
    console.log('O numero', num3, 'é o maior')
}