/** Estudo de Arrays 
 * Cada array é composto pelo : Array, Elemento, Key, Valor
 *  
 * let a = [ valor, valor, valor ]
 * 
 * array.length
 * array.sort()
 * indexOf()
 */

var array = [ "Luis" , "Maria" , "João" ] 

console.log (array) 
//Adiciona o valor na posição selecionada
 array[3] = 'Pedro'

 console.log (array) 
//adiciona o valor ao próximo elemento disponivel 
 array.push('Carla')

 console.log (array) 
//Arruma o array em ordem crescente ou alfabética 
 array.sort()

 console.log (array) 
/*
// Estrutura For padrão 
 for (var c = 0 ; c < array.length ; c++){

    console.log(array[c])
 }
*/
 // Estrutura For otimizada, serve somente para arrays e objects

 for (var c in array)[
     console.log (array[c])
 ]

 console.log (array.indexOf('Carla'))
 
 