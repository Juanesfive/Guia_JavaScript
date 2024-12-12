// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let producto1 = parseInt(prompt("Ingrese el precio del producto 1"));
let producto2 = parseInt(prompt("Ingrese el precio del producto 2"));

let producto3 = parseInt(prompt("Ingrese el precio del producto 3"));

let producto4 = parseInt(prompt("Ingrese el precio del producto 4"));
let producto5 = parseInt(prompt("Ingrese el precio del producto 5"));

let descuento1 = (producto1 * 0.05);

let descuento2 = (producto2 * 0.05);


let descuento4 = (producto4 * 0.02);

let descuento5 = (producto5 * 0.02);

let precio = (producto1 + producto2 + producto3 + producto4 + producto5) - (descuento1 + descuento2 + descuento4 + descuento5);

alert(`El precio del producto 1 con el descuento es: ` + (producto1 - (producto1 * 0.05)));
alert(`El precio del proyecto 2 con el descuento es: ` + (producto2 - (producto2 * 0.05)));
alert(`El precio del producto 3  es: ` + producto3 );
alert(`El precio del producto 4 con el descuento es: ` + (producto4 - (producto4 * 0.02)));
alert(`El precio del producto 5 con el descuento es: ` + (producto5 - (producto5 * 0.02)));

alert(`El precio final es: ` + precio);

