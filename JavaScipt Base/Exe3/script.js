/** Progama que recebe um valor inicial e um final, 
 * calcula o numero de passos do inicio ao fim, e
 * mostra os usuário  
 */

function contar(){

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')
    var p = document.createElement('p')

    // res.innerHTML= `inicio ${inicio.value}, fim ${fim.value}, passos ${passos.value} `
   
    //Validação dos valores inseridos
    if (inicio.value === '' || fim.value === '' || passos.value === ''){
        window.alert('Numeros inválidos, tente')

    }else{
        //Transformação dos valores
        res.innerHTML = "Contando ... <br>"
        let     ini = Number(inicio.value)
        let fn = Number(fim.value)
        let pas = Number(passos.value)
        //Verificação do número de passos
        if(pas <= 0){
            window.alert(`O número de passos não pode ser negativo ou zero. Considerando passo 1`)
            pas = 1
        }
        
            if(ini < fn){
                //Contagem Crescente
                for(var x = ini ; x <= fn ; x += pas){
                    res.innerHTML += `${x}, `
                    // Adiciona emojis 
                   // res.innerHTML += `${x}, \u(codigo)`
                }

            }else{
                //Contagem Decrescente
                    for(var x = fn ; x >= ini ; x -= pas){
                        res.innerHTML += `${x}, `

                     }
            }
            
        
           
     }
    



}