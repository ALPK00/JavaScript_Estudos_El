var idade = 70

if (idade < 16){
    console.log(`Não vota`)
} else {
    if (idade < 18 || idade > 68){
        console.log(`Voto opcional`)
    } else {
        console.log(`Voto obrigatório`)
    }

}