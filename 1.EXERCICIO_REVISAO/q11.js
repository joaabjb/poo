const input = require('prompt-sync')()

const p = Number(input('Digite o valor de p: '))
const x = Number(input('Digite o valor de x: '))

function porcent(v, p){
    let valor = (p * x) / 100
    return valor
}

const num = porcent(x, p)

console.log(p,'% de', x, 'equivale a:', num)