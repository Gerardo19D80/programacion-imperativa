/*

Dada la siguiente matriz: 

- Desarrollar una función que retorne la suma de todos los valores de la fila 2.
- Desarrollar una función que retorne un nuevo array que contenga solo los elementos pares que se encuentren dentro de la matriz.

IMPORTANTE: Realiza el correspondiente llamado a cada una de las funciones para demostrar el correcto funcionamiento de las mismas.

*/

let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10], // la suma es 40
    [11,12,13,14,15]
]

console.log (" ")
console.log ("--- *** SUMAR FILAS *** ---")
console.log (" ")

function calcularSumaFilas() {
    let sumaMatriz = 0;
    for (let j = 0; j < matriz[1].length; j++) {
        sumaMatriz += matriz[1][j];
    }
    //console.log(matriz[1]);
    console.log("El resultado de la suma del elemento 2 en la posicion 1 es: " + sumaMatriz);
}

calcularSumaFilas();

console.log (" ")
console.log ("--- *** PARES *** ---")
console.log (" ")


function elementosPares() {
    let pares = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++){
            if ((matriz[i][j]) % 2 === 0) {
                pares.push(matriz[i][j]);
        }
    }
   
}

console.log (pares)

}

elementosPares()