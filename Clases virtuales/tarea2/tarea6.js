let urlFeliz = "https://pbs.twimg.com/profile_images/1061860760668852224/Z4Z07ZMi_400x400.jpg"
let urlTriste = "https://static.vecteezy.com/system/resources/thumbnails/002/718/799/small/sad-emoji-face-classic-line-style-icon-free-vector.jpg"
let imgHtml = document.querySelector ("#carita")

let numero
do {
    numero = Number(prompt("Ingrese el primer número"))
} while (isNaN(numero)|| 10<numero || 0>numero);
let numero2
do {
    numero2 = Number(prompt("Ingrese el segundo número"))
} while (isNaN(numero2)|| 10<numero2 || 0>numero2);
let numero3
do {
    numero3 = Number(prompt("Ingrese el tercer número"))
} while (isNaN(numero3)|| 10<numero3 || 0>numero3);

let promedio = (Number(numero)+Number(numero2)+Number(numero3))/Number(3);
if (promedio >= Number (6)){
    imgHtml.src = urlFeliz
}else{
    imgHtml.src = urlTriste
}