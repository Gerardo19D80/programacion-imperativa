const prompt = require ("prompt-sync")({ sigint: true }); 
//respetar los espacios caso contratio no funciona la variable

let nombre= prompt ("Ingrese su nombre: ");
console.log (`Hola ${nombre}!!!`);