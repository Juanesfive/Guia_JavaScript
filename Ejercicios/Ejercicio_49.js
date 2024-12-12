// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

let lado1 = parseInt(prompt("Ingrese el lado del rectangulo"));

let lado2 = parseInt(prompt("Ingrese el lado del rectangulo"));


if (lado1 > 0 && lado2 > 0) {
    alert(`El área de este rectangulo teniendo en cuenta que los lados son ${lado1} y ${lado2} es: ` + (lado1 * lado2));
}else {
    alert("Los lados deben ser mayores a 0");
}