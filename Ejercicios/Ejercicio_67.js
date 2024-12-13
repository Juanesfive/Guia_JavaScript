// Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.

let altura = parseInt(prompt("Ingrese un numero entero para usar en la altura del triangulo"));

for (let i = 1; i <= altura; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}