// LOCAL DE SANDWICHES
/* 

● crear una función que reciba — un string para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. 
● La función deberá consultar qué tipo de sándwich seleccionó, luego el tipo de pan, y por último verificar qué adicionales se seleccionaron.
● Finalmente, deberá retornar el valor numérico del total a pagar del cliente.

Recibiremos los datos de la siguiente manera:
 
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base diferente por cada selección:

● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)

Tipo de pan:

● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)

Adicionales - Cada uno de estos adicionales están representados por booleanos: 

● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5

*/



function sandwich (tipo, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    switch (tipo) {
        case "pollo":
            subtotal = 150
        break;
        case "carne":
            subtotal = 200
        break;
        case "veggie":
            subtotal = 100
        break;
        default: 
		return	console.log (" coloque el tipo de sandwich adecuado ");
    }
    
    switch (pan) {
        case "blanco":
            total = 50 + subtotal
        break;
        case "negro":
            total = 60 + subtotal
        break;
        case "sinGluten":
            total = 75 + subtotal
        break;
        default: 
		return	console.log (" coloque el tipo de pan adecuado ");
    }
    
    if(queso) return total += 20;
    if(tomate) return total += 15;
    if(lechuga) return total += 10;
    if(cebolla) return total += 15;
    if(mayonesa) return total += 5;
    if(mostaza) return total += 5;  

}

console.log (sandwich ("veggie", "blanco", false, false, true, false, true, true));
