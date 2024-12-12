// Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let figura = prompt("cual de las siguientes figuras geométricas desea calcular: Triángulo o Círculo (T) o (C)");

let base = parseInt(prompt("Ingrese la base del triangulo"));

let altura = parseInt(prompt("Ingrese la altura del triangulo"));

if (figura === "T") {
    alert(`El área de este triangulo teniendo en cuenta que la base es ${base} y la altura es ${altura} es: ` + ( 1/2 * base * altura ));
} else if (figura === "C") {
    let radio = parseInt(prompt("Ingrese el radio del circulo"));
    alert(`El área de este circulo teniendo en cuenta que el radio es ${radio} es: ` + (Math.PI * radio * radio));
}

