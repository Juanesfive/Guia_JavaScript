// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

let numero = parseInt(prompt("Ingrese un numero del 0 al 5"));

function numerosTexto(numero) {
    switch (numero) {
        case 0:
            console.log("Cero");
            break;
        case 1:
            console.log("Uno");
            break;
        case 2:
            console.log("Dos");
            break;
        case 3:
            console.log("Tres");
            break;
        case 4:
            console.log("Cuatro");
            break;
        case 5:
            console.log("Cinco");
            break;
        default:
            console.log("Ingrese un numero del 0 al 5");
            break;
    }
    
}

numerosTexto(numero);

