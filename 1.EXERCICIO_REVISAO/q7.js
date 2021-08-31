const prompt = require('prompt-sync')();

var num = []

for(let i = 0; i < 5; i++){
    num[i] = Number(prompt('Digite o elemento do vetor: '))
}

console.log('Os elementos do vetor são: ')
console.log(num)