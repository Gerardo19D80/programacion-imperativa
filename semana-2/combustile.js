/*

1. Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.
2. A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:

● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

*/

let vehiculo = "moto";
let litrosConsumidos = 5;

function totalAPagar (vehiculo, litrosConsumidos) {
    
    switch (vehiculo) {
        case "auto":
        	total = (10 * litrosConsumidos);
        break;	 
         case "moto":
        	total =  (5 * litrosConsumidos);
        break;	 
         case "autobus":
        	total = (20 * litrosConsumidos);
        break;
    default: 
		return	console.log ("coloque el vehiculo correspondiente");	 
    }

    if(litrosConsumidos >= 0  && litrosConsumidos <= 25 ) return total += 50;
    if(litrosConsumidos > 25 ) return total += 25;

}

console.log(totalAPagar (vehiculo, litrosConsumidos));