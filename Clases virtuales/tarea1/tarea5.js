do{
    peso=Number(prompt("Cuál es su masa en Kg? Introduzca solo datos validos"))
}while (Number.isNaN(peso)||peso<0);
do{
    estatura=Number(prompt("Cuál es su estatura en m (use el punto)? Introduzca solo datos validos"))
}while (Number.isNaN(estatura)||estatura<0);
let IMC=peso/(estatura*estatura)
let clasificacion
if (IMC >= 40) {
    clasificacion="Obecidad de clase III"
}else{
    if (IMC >= 35) {
        clasificacion="Obecidad de clase II"
    }else{
        if (IMC >= 30) {
            clasificacion="Obecidad de clase I" 
        }else{
            if (IMC >= 25) {
                clasificacion="Preobesidad" 
            }else{
                if (IMC >= 18.5) {
                    clasificacion="Intervalo normal" 
                }else{
                    clasificacion="Insuficiencia ponderal" 
                }
            }
        }
    }
}
document.getElementById("resultado").innerHTML="Usted tiene " + clasificacion