
/*

Realizá un programa que permita ingresar un número entero n. Debe mostrar los primeros
10 múltiplos de n (desde 1 x n).

*/

function num (a){
    for (let i = 1; i <= 10; i++) {
        console.log (a, " * ", i,  " = ", (i * a));
    }
}

num (2)