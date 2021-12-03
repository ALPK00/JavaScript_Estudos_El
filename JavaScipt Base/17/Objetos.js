

let amigo =
{nome : "José",
genero : "M",
peso : 45,
engordar(p=0){
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.peso}`)

//console.log (typeof(amigo))