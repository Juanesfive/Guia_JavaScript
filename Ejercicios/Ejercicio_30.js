// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.


let contraseñaIngresada = prompt("Ingrese la contraseña");

if (contraseñaIngresada.length >= 8 && contraseñaIngresada.length <= 12) {
    if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,12}$/.test(contraseñaIngresada)) {
        alert("La contraseña es fuerte");
    } else {
        alert("La contraseña es debil");
    }
}