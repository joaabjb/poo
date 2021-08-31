const input = require('prompt-sync')()

let n = input('Digite o valor de n: ')
let d = input('Digite o valor de d: ')

function quantas_vezes(num, ref){
    let cont = 0

    for(c of num){
        if (c == ref){
            cont += 1
        }
    }
    return cont
}

let q = quantas_vezes(n, d)

console.log('O número', d, 'aparece', q, 'vezes em ', n)