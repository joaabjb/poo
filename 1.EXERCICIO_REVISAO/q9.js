//  Programa que lê uma string e substitui determinados caracteres nessa string
const input = require('prompt-sync')()

var s = input('Digite a string: ')
var a = input('Digite a: ')
var b = input('Digite b: ')
var nova_s = new String()

for(var i = 0; i < s.length; i++){
    if(s[i] == a){
        nova_s += b
    }
    else{
        nova_s += s[i]
    }
}

console.log('A nova string é: ', nova_s)