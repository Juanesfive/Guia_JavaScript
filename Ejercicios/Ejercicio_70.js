// Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

let contraseña = "Five5Five5";
let contraseñaIngresada = prompt("Ingrese la contraseña");

while (contraseñaIngresada !== contraseña) {
    contraseñaIngresada = prompt("Ingrese la contraseña correcta la anterior no era correcta");

}