
let matriz = [ // 5x5 (filas y columnas)
    ['0-0', '0-1', '0-2', '0-3', '0-4'],//elemento 1
    ['1-0', '1-1', '1-2', '1-3', '1-4'],//elemento 2
    ['2-0', '2-1', '2-2', '2-3', '2-4'],//elemento 3
    ['3-0', '3-1', '3-2', '3-3', '3-4'],//elemento 4
    ['4-0', '4-1', '4-2', '4-3', '4-4'] //elemento 5
]

/*
array = [elemento1, elemento2, elemento3, elemento4, elemento5]
*/
console.log('--- *** PARA IMPRIMIR LA MATRIZ *** ---');
console.log('');
console.table(matriz);
console.log('');
console.log('--- *** PARA RECORRER LA FILA DE LA MATRIZ *** ---');
console.log('');
console.log(matriz[2]); //para recorrer la fila dos (elemento3).
console.log('');
console.log('--- *** PARA RECORRER LA COLUMNA DE LA MATRIZ *** ---');
console.log('');
// para recorrer la columna en la posicion 1:
for (let fila = 0; fila < matriz.length; fila = fila + 1){
    console.log(matriz[fila][1])
}
console.log('');
console.log('--- *** PARA RECORRER LA MATRIZ COMPLETA ITEM POR ITEM *** ---');
console.log('');

for (let fila = 0; fila < matriz.length; fila++){ // En la primera iteracion que haga va a entrar en la fila 0
    for (let columna = 0; columna < matriz[fila].length; columna++){ // columna
        console.log(matriz[fila][columna]);
    }
}

console.log('');
console.log('--- *** PARA VERIFICAR SI LA MATRIZ ES CUADRADA *** ---');
console.log('');

function VerificarNxN(matriz) {
    if (matriz.length === matriz[0].length) { //Esta línea compara la longitud de la matriz (es decir, la cantidad de filas) con la longitud de la primera fila (matriz[0].length). Si estos dos valores son iguales, significa que la matriz tiene la misma cantidad de filas y columnas, lo cual es una característica de una matriz cuadrada.
        console.log ('Es cuadrada')
    } else {
        console.log ('No es cuadrada')
    }
}

VerificarNxN(matriz)
    


