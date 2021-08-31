const input = require('prompt-sync')()


let t = Number(input('Digite o tempo em segundos: '))

function tempo(t){
    th = Math.floor(t / 3600)
    tm = Math.floor((t - th*3600) / 60)
    ts = Math.floor(((t - th * 3600 - tm * 60)))

    return [th, tm, ts]

}

var tf = tempo(t)

console.log(t, 's equivalem a', th, 'h', tm, 'min e', ts, 's')

