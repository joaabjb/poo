const prompt = require('prompt-sync')();

var num = []
let par = 0
for(let i = 0; i < 20; i++){
    num[i] = Number(prompt('Digite o elemento do vetor: '))
    if (num[i] % 2 == 0){
        par += 1
    }
}

console.log('Os elementos do vetor são: ')
console.log(num)
console.log('O vetor possui',par,'numeros pares')