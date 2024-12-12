// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible
//     realizarla.

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
if (num1 > num2) {
    alert('Ya que el primer numero es mayor que el segundo el resultado es: ' + num1 - num2);
} else {
    alert("La operacion no es posible realizarla");
}