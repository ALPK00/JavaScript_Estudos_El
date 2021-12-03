/* 
Adicionar valores e armazenar em um array 
Mostrar : 
    total de numeros inseridos no array 
    maior valor inserido
    menor valor inserido
    soma dos valores 
    media dos valores
*/
// Variaveis gerais
let arr = [] 
let val = document.getElementById('txt1')
let res = document.getElementById('res')
let lista = document.getElementById('fLista')

// Verifica se o elemento é um nummero entre 1 e 100 
function isNumber(n){
    if(Number(n)>=1 && Number(n) <= 100  ) {
        
        return true

    }else{

        return false
        
    }
}

// Cria a função que checa se o elemento está no array ou não
function inList(n , l){
     if (l.indexOf(Number(n)) != -1){

     return true

    }else{

     return false

    }
}

// Função que insere elementos no array 
function inserir(){
    

    if (isNumber(val.value) && !inList(val.value , arr)){
        
        arr.push(Number(val.value))
        let op = document.createElement('option')
        op.text = `  Adicionado ${val.value} `
        lista.appendChild(op)

    }else{

        window.alert('Valor inválido ou já existente na lista')
        
    }
    
    val.value = ''
    val.focus()

}

function mostrar(){
//Variaveis
    let soma = 0
    let med = 0
    let min = arr[0]
    let max = arr[0]
    if (arr.length == 0){

        window.alert('Não há valores inseridos')

    }else{
        
// Verifica o numero maior e o menor  
       for (let c in arr ){
            soma += arr[c]
            med = soma / arr.length

            if (arr[c] > max){
                max  =  arr[c]
            }
            if (arr[c] < min ){
                min = arr[c]
            }
            res.innerHTML = ''
           
        }

        res.innerHTML = `<p> Foram inseridos ${arr.length} valores no array </p>`
        res.innerHTML += `<p> A soma dos númmeros é ${soma} </p>`
        res.innerHTML += `<p> A média dos números é ${med.toFixed(1)} </p>`
        res.innerHTML += `<p> O maior valor inserido foi ${max}</p>`
        res.innerHTML += `<p> O menor valor  inserido foi ${min} </p>`
    }

}