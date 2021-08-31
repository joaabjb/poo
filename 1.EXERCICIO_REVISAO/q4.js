const prompt = require('prompt-sync')();

const num = Number(prompt('Digite o número do mês desejado:'))

switch (num){
    case 1:
        console.log('O mês escolhido é janeiro')
        break
    case 2:
        console.log('O mês escolhido é fevereiro')
        break
    case 3:
        console.log('O mês escolhido é março')
        break
    case 4:
        console.log('O mês escolhido é abril')
        break
    case 5:
        console.log('O mês escolhido é maio')
        break
    case 6:
        console.log('O mês escolhido é junho')
        break
    case 7:
        console.log('O mês escolhido é julho')
        break
    case 8:
        console.log('O mês escolhido é agosto')
        break
    case 9:
        console.log('O mês escolhido é setembro')
        break
    case 10:
        console.log('O mês escolhido é outubro')
        break
    case 11:
        console.log('O mês escolhido é novembro')
        break
    case 12:
        console.log('O mês escolhido é dezembro')
        break
    default:
        console.log('Número inválido!')
}