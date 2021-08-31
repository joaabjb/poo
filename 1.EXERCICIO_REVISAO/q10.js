//  Programa para remover as vogais de uma texto
const input = require('prompt-sync')()

var texto = input('Digite o texto: ')
var novo_texto = ''

function eh_vogal(letra){
    vogais = 'aeiouAEIOU'
    for (caracter of vogais){
        if (caracter == letra){
            return true
        }
    }
    return false
}

for(letra of texto){
    if (eh_vogal(letra)){
    }
    else{
        novo_texto += letra
    }
}

console.log('A novo texto sem as vogais é: ')
console.log(novo_texto)