let urlFeliz = "https://pbs.twimg.com/profile_images/1061860760668852224/Z4Z07ZMi_400x400.jpg"
let urlTriste = "https://static.vecteezy.com/system/resources/thumbnails/002/718/799/small/sad-emoji-face-classic-line-style-icon-free-vector.jpg"
let imgHtml = document.querySelector ("#carita")

let numero = prompt ("Ingrese la primera nota");
let numero2 = prompt ("Ingrese la segunda nota");
let numero3 = prompt ("Ingrese la tercera nota");
let promedio = (Number(numero)+Number(numero2)+Number(numero3))/Number(3);
console.log (`Su promedio es: ${promedio}`);

if (promedio >= Number (6)){
    imgHtml.src = urlFeliz
}else{
    imgHtml.src = urlTriste
}