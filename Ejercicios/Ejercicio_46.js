// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));
let num3 = parseInt(prompt("Ingrese un tercer numero"));

if (num1 > num2 && num1 > num3) {
    alert("El numero mayor es: " + num1);
} else if (num2 > num1 && num2 > num3) {
    alert("El numero mayor es: " + num2);
} else if (num3 > num1 && num3 > num2) {
    alert("El numero mayor es: " + num3);
}
