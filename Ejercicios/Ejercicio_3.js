
// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

try {
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero"));
    if (numero2 === 0) {
        throw new Error("Ingresa otro divisor que no sea cero (0)");
    }
    console.log(numero1 / numero2);
} catch (error) {
    alert(error.message);
}