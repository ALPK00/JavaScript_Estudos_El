function verificar(){
    //Iniciando a função que retorna a DATA
    var data = new Date()
    var ano = data.getFullYear()
//
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('p#res')
    var foto = document.createElement('img')
    foto.setAttribute('id','foto')

//Verificação dos dados inseridos 
    if (fAno.value.length == 0 || fAno.value == null || fAno.value > ano  ){
        window.alert(`A data que você inseriu foi ${fAno.value}, Insira uma data válida`)
    } else {
        var fGen = document.getElementsByName('radgen') 
        var idade = ano - fAno.value  
          var genero = ''



        if (fGen[0].checked ){
            genero = 'Masculino '
            
            if(idade > 0 && idade <= 11 ){
                res.innerHTML= `Criança ${genero} de ${idade}`
                //Criança
            }else if (idade > 11 && idade <= 19){
                res.innerHTML= `Jovem ${genero} de ${idade}`
                //Jovem
            }else if (idade > 19 && idade <= 60){
                res.innerHTML= `Adulto ${genero} de ${idade}`
                //Adulto
            }else {
                res.innerHTML= `Idoso ${genero} de ${idade}`
                //idoso
            }
        } else if (fGen[1].checked ){
            genero = 'Feminino'

            if(idade > 0 && idade <= 11 ){
                res.innerHTML= `Criança ${genero} de ${idade}`
                //img.setAttribute('src','')
                //Criança
            }else if (idade > 11 && idade <= 19){
                res.innerHTML= `Jovem ${genero} de ${idade}`
                //Jovem
            }else if (idade > 19 && idade <= 60){
                res.innerHTML= `Adulto ${genero} de ${idade}`
                //Adulto
            }else {
                res.innerHTML= `Idoso ${genero} de ${idade}`
                //idoso
            }
        }
        
    }
        
  
}

