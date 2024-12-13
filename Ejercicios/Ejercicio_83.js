// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es válido y false si no es válido.

let pin = prompt("Ingrese el pin");

function validarPin(pin) {
    // pin = String(pin);
    if (pin.length === 4 || pin.length === 6) {
        if (pin.match(/^[0-9]+$/)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }    
}

console.log(validarPin(pin));
