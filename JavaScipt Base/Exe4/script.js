/** Programa que recebe 2 números do usuário,
 * verifica se os campos não estão vazios,
 * e calcula e mostra a tabbuada referente 
 * a os numeros selecionados
 */

function calcular(){
    let n1 = document.getElementById('txtn1')
    let res = document.getElementById('res')
    
// Etapa de verificação 
    if (n1.value === "" ){
    window.alert(`Insira um número válidos`)
// Realização do cálculo 
    } else {
        let multiplicador = Number(n1.value)
        
        res.innerHTML = ``
        for(let c = 0 ; c <= 10 ; c++){
            // Cria um campo option detro do select
            let item = document.createElement('option')
            item.text = `${multiplicador} x ${c} = ${multiplicador * c}`
            item.value = `v${c}`
            res.appendChild(item)
        }

    }
    
}