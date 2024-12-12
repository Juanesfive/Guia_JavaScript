// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = parseInt(prompt("Ingrese su saldo"));
let interes3 = (saldo * 0.03);
let interes4 = (saldo * 0.04);
if (saldo < 100000) {
    alert(`El interes pagado es de: ` + interes3);
    alert(`El saldo final es de: ` + (saldo + interes3));
} else if (saldo > 100000) {
    alert(`El interes pagado es de: ` + interes4);
    alert(`El saldo final es de: ` + (saldo + interes4));
}