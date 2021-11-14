let h1Nombre = document.querySelector("#nombreApellido")
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
h1Nombre.innerHTML = `Hola ${nombre} ${apellido}`
console.log(h1Nombre)
let h2Edad = document.querySelector("#edad")
let edad = prompt("Ingrese su edad")
let suma = (Number(edad)+ Number(10))
h2Edad.innerHTML = `En 10 años tendrás ${suma}`