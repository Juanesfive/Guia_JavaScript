// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let consumo = parseInt(prompt("Ingrese el consumo"));

if (consumo > 130000) {
    alert(`El consumo con descuento es: ` + (consumo - (consumo * 0.15)));
} else {
    alert(`El consumo sin descuento es: ` + consumo);
}