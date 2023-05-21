const prompt = require ("prompt-sync")({ sigint: true }); 
//respetar los espacios caso contratio no funciona la variable

let nombre= prompt ("Ingrese su nombre: ");

function invitado (nombre) {
if (nombre === "Cosme Fulanito"){
    return console.log("No puede pasar rejected: ", false);
} else { 
    return console.log("puede pasar aceptado", true); 
}
}