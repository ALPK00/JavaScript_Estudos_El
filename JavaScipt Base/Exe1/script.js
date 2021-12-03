
function load(){

    var img  = window.document.querySelector(' div#img ')
    var msg = window.document.querySelector('div#msg')

    var data = new Date()
    var hora = data.getHours()
   // var hora = 22
    msg.innerHTML = `Agora são: ${hora} `
    
    if (hora >= 0 && hora <12){
       img.innerHTML= "Bom dia"
       document.body.style.backgroundColor = "#C3F2FF"
        //Bom dia 

    }else if (hora > 12 && hora < 18){
        img.innerHTML= "Boa tarde"
        document.body.style.backgroundColor= "#ECBD85"
        //Boa tarde

    }else {
        img.innerHTML= "Boa noite"
        document.body.style.backgroundColor = "#352D6F"
        // Boa noite

    }
 
}
