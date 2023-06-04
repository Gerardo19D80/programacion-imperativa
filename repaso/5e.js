/*

Realizá un programa que permita ingresar valores del mismo tipo para las variables num1 y
num2. Una vez cargadas, mostrar ambas variables por pantalla, intercambiá sus valores (que
lo cargado en num1 quede en num2, y viceversa) y volvé a mostrarlas actualizadas.

*/

let num1 = 5;
let num2 = 10;
let aux = "";

aux = num1;
num1 = num2;
num2 = aux;

console.log (num1, num2);

