// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.

// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.

// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están 
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

let pizza = prompt("¿Desea una pizza vegetariana? (si/no)");

if (pizza === "si") {
    alert("Usted eligio una pizza vegetariana esta lleva las siguientes dos opciones de ingredientes a escoger cual elige: Pimiento y tofu ");
    let ingrediente = prompt("Ingrese el ingrediente que desea agregar (Pimiento y tofu)");
    alert("Usted eligio una pizza vegetaria que incluye los siguientes ingredientes: " + ingrediente + "," + " " + "mozzarella, tomate.");
} else {
    alert("Usted eligio una pizza no vegetariana esta lleva las siguientes tres opciones de ingredientes a escoger. cual de los 3 elige: Pepperoni, Jamón y Salmón ");
    let ingrediente = prompt("Ingrese el ingrediente que desea agregar (Pepperoni, Jamón o Salmón)");
    alert("Usted eligio una pizza no vegetariana que incluye los siguientes ingredientes:  " + ingrediente + "," + " " + "mozzarella, tomate.");
}


