// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

let tipoMembresia = prompt("Ingrese el tipo de membresia (A, B o C)");

let precio = parseInt(prompt("Ingrese el precio del helado"));

if (tipoMembresia === "A") {
    alert(`El precio con descuento para la membresia A es: ` + (precio - (precio * 0.10)));
} else if (tipoMembresia === "B") {
    alert(`El precio con descuento para la membresia B es: ` + (precio - (precio * 0.15)));
} else if (tipoMembresia === "C") {
    alert(`El precio con descuento para la membresia C es: ` + (precio - (precio * 0.20)));
}