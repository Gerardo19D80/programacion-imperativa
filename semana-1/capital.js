/*

Realizá un programa que permita resolver el siguiente problema: Tres personas aportan
diferente capital a una sociedad y desean saber el valor total aportado y qué porcentaje
aportó cada una (indicando nombre y porcentaje). Solicitar la carga por teclado del nombre
de cada socio, su capital aportado y a partir de esto calcular e informar lo requerido
previamente.

*/

const prompt = require("prompt-sync")({ sigint: true });

let capital1 = prompt("Ingrese su capital: ");
console.log(`El primer numero ingresado : ${capital1}`);

let capital2 = prompt("Ingrese su capital: ");
console.log(`El segundo numero ingresado : ${capital2}`);

let capital3 = prompt("Ingrese su capital: ");
console.log(`El tercer numero ingresado : ${capital3}`);

let capitalTotal = parseInt(capital1) + parseInt(capital2) + parseInt(capital3);

let porcentajecapital1 = capital1/capitalTotal;
let porcentajecapital2 = capital2/capitalTotal;
let porcentajecapital3 = capital3/capitalTotal;

console.log(`El capital total es : ${capitalTotal}`);
console.log(porcentajecapital1)
console.log(porcentajecapital2)
console.log(porcentajecapital3)

