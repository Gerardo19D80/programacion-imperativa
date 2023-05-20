// if ternario se escribe 100% de forma horizontal y no lleva {}


console.log("Estructura if ternario:  condicion ? expresion para el true : expresion para el false");

let fruta = "banana";
let resultado = fruta == "manzana"? "Buenisimo, me gustan las manzanas" : "UFF, me gustan las manzanas";
console.log (resultado);



console.log("*----------Estructura Switch: ----------*");

/*
switch (expresion) {
    case caso1:
        console.log ("bloque de codigo si es que el caso se cumple");
    break;
}*/

let semaforo = "apagado";

switch (semaforo) {
    case "verde":
        console.log ("el peaton puede cruzar");
        break;
    case "amarillo":
        console.log ("Precaucion");
        break;
    case "rojo":
        console.log("detenerse");
        break;
    default:
        console.log ("No funciona el semaforo");
    break;
}

/*
let dia = "viernes";

function finDeSemana (dia) {	
	switch (dia) {
	case "viernes":
        console.log ("buen finde");
        break;	
	case "lunes":
        console.log ("buena semana");
        break;
	default:
        console.log('buen dia');
        break;
	}
}

finDeSemana();

*/

function tengoClases(dia) {    
	switch (dia) {
		case "lunes":
        	console.log ("tenés clases");
        	break;	
		case "miércoles":
        	console.log ("tenés clases");
        	break;
		case "viernes":
       		console.log ("tenés clases");
        	break;
		default: 
			console.log ("no tenés clases");
    		break;
	}
}

tengoClases("sabado");