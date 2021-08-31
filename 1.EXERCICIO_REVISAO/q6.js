const prompt = require('prompt-sync')();

var i = 0;
var soma = 0;
var num = Number(prompt('Digite o primeiro número (-1 para encerrar): '))

while(num!=-1){
    i += 1
    soma += num
    num = Number(prompt('Digite o próximo número (-1 para encerrar): '))
}

if (i == 0){
    console.log('Nenhum número foi digitado!')
}
else{
    console.log('A soma dos números digitados é: ', soma)
    console.log('A média dos números digitados é: ', (soma / i))
}
