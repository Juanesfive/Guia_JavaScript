// Realice el siguiente algoritmo para convertir pesoscolombianos a dolores y a euros, utilizando como
// constante el valor de una moneda.

let pesosColombianos = parseInt(prompt("Ingrese la cantidad de pesos colombianos"));
let valorDolar = 4016;
let valorEuro = 4490;

alert(`La cantidad de dolares es de: ` + (pesosColombianos / valorDolar));
alert(`La cantidad de euros es de: ` + (pesosColombianos / valorEuro));