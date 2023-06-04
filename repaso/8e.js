/*

Realizá un programa que permita ingresar dos números naturales. Debes mostrar los
resultados para las 4 operaciones matemáticas básicas con los números ingresados.

*/

let a = 10;
let b = 20;

function calcula (operacion){
    switch (operacion) {
    case "suma":
        console.log ("suma: ", (a+b));
        break;	
    case "resta":
        console.log ("resta: ", (a-b));
        break;
    case "multi":
        console.log ("multiplicacion: ", (a*b));
        break;
    case "multi":
    console.log ("division: ", (a/b));
        break;			
		
        default: 
			console.log ("ingrese un numero valido");
    	break;
}
}


