
const prompt = require ("prompt-sync")({ sigint: true }); 
//respetar los espacios caso contratio no funciona la variable

let nombre= prompt ("Ingrese su nombre: ");
console.log (`Hola ${nombre}!!!`);

/* npm i promt-sync */

/* 

Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola. Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().

*/

