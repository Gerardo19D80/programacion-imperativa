/* 

Realizá un programa que permita al usuario ingresar dos números enteros. La computadora
debe indicar si el mayor es divisible por el menor. (Un número entero a es divisible por un
número entero b cuando el resto de la división entre a y b es 0.

*/

function divisible (a, b) {
    if (a > b && a%b == 0) return console.log ("El numero " + a + " es divisible por cero")
    if (b > a && b%a == 0) return console.log ("El numero " + b + " es divisible por cero")
    else return console.log ("El numero no es divisible por cero")
}

divisible (30, 10);


