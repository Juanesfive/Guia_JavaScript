// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.

let frase = prompt("Ingrese una frase que lo identifique como programador de Software");

alert(`La frase invertida es: ` + frase.split("").reverse().join(""));