// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase.

let frase = prompt("Ingrese una frase");
let letra = prompt("Ingrese una letra");

alert(`La letra ${letra} aparece ${frase.split(letra).length - 1} veces en la frase.`);