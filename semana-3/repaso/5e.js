
/*

Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.

● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

*/

let coche = 86;
let moto = 70;
let autobus = 55;

function totalAPagar(vehiculo, litrosConsumidos){

    if (litrosConsumidos > 25 ) return console.log((vehiculo * litrosConsumidos) + 25)
    if (litrosConsumidos > 0 && litrosConsumidos <=25 ) return console.log((vehiculo * litrosConsumidos) + 50)

}

totalAPagar(moto, 10)

