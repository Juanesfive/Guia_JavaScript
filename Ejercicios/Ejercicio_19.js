// Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = parseInt(prompt("Ingrese el radio del cilindro"));

let altura = parseInt(prompt("Ingrese la altura del cilindro"));


alert(`El area del cilindro es: ` + (2 * Math.PI * radio * (radio + altura)));

alert(`El volumen del cilindro es: ` + (Math.PI * radio * radio * altura));