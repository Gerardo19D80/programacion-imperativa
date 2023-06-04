/* 

Realizá un programa que permita ingresar un número entero e indique si se trata de un
número par o impar.

*/

function par (a) {
    
    if (a % 2 == 0) {
        return console.log("El resultado del numero: ", a, " es par")
    } else {
        return console.log("El resultado del numero: ", a, " es impar")     
    }
}

par (3)