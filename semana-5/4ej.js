/* 
Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423.

*/


let numero = 32443;

let array = String(numero).split(''); // paso 1: transformar el numero en String para pasarlo a un array con .split.
let arrayInvertido = array.reverse(); // paso 2: hacer un reverse el array.
let numeroInvertido = parseInt(arrayInvertido.join('')); // paso 3: unificar el array y transformarlo en numero.

console.log(numero);
console.log(array);
console.log(arrayInvertido);
console.log(numeroInvertido);
