// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

let cadenas = /["']{2}/g;

let frase = "hola como 'vas' ";

console.log(frase.match(cadenas));