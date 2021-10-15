/* 
ATIVIDADE_3

Questão_1: 
a) Não irá compilar pois a tipagem do Typescript é estática, ou seja, após definir a variável 
“a” como number, não é possível alterar para string.
b) Irá compilar pois variáveis do tipo any podem assumir qualquer tipo.
c) Irá transpilar, pois 10 e 2, valores atribuídos a variável c, são do tipo number.

Questão_2:
a) 3
b) 12 
c) Apresenta erro e não transpila, pois só foi inserido um argumento para a função;
*/


//Questão_3:

enum Estado {PI, CE, MA}

for (let i = 0; i <= 2; i++){
    console.log(Estado[i])
}

for (let i = 0; i <= 2; i++){
    console.log(Estado[i])
}



//Questão_5:

function exibir(...letras: string[]){
    for (let letra of letras){
        console.log(letra)
    }
}
exibir("a", "b", "c", "d")

