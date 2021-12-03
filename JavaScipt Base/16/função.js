/** Introdução à funcões  
 *  Chamada, parâmetros, ações, retorno.
 * São ações que são chamadas ou em decorrencia de algum evento
    Receee um parâmetro e retorna um resultado
*/ 

function parimpar(n){
    if (n % 2 == 0){
        return 'Par'
    }else {
        return 'Impar'

    } 
}


console.log(parimpar(6))


function soma(n1 = 0, n2 = 0){
    return n1 + n2 
}

console.log (soma(1))

// Uma variável pode receebr o valor de uma função no JS
// Passando um parâmetro para a variável ela consegue retornar uma função
var x = function(n1){
    return n1*2
}

console.log(x(4))

//Arrow function (para ler)



function fatorial(valor){
   var n = 1
   for ( let c = valor; c > 1 ; c--){
       n *= c
   } 
   return n
}

console.log(fatorial(7))

// Recursividade 

function fat(n){
    if (n == 1){
        return 1

    }else {
        return n * fat(n-1)
    }

}
console.log(fat(7))

