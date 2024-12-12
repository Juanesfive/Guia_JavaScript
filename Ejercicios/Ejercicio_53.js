// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

let producto1 = parseInt(prompt("Ingrese el precio del producto 1"));
let producto2 = parseInt(prompt("Ingrese el precio del producto 2"));
let producto3 = parseInt(prompt("Ingrese el precio del producto 3"));
let producto4 = parseInt(prompt("Ingrese el precio del producto 4"));
let producto5 = parseInt(prompt("Ingrese el precio del producto 5"));

let subtotal = (producto1 + producto2 + producto3 + producto4 + producto5);

let iva = (subtotal * 0.19);

alert(`El iva de la compra es: ` + iva);
alert(`El subtotal de la compra es: ` + subtotal);
alert(`El total de la compra es: ` + (subtotal + iva));