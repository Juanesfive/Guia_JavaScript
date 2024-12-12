// Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

let precio = parseInt(prompt("Ingrese el precio del medicamento"));

alert(`El descuento es: ` + (precio * 0.10));

alert(`El precio final es: ` + (precio - (precio * 0.10)));