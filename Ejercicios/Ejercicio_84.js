// Genera un patrón de asteriscos en forma de pirámide.
// este es practicamente igual al del ejercicio 67 solo que este no pide al usuario el numero de
// altura

let altura = 10;

for (let i = 1; i <= altura; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}