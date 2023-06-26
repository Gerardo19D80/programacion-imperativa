/*

2. Matrices:

Enunciado: 

Escribe una función llamada "sumaMatrices" que reciba dos matrices de igual tamaño como parámetros y retorne una nueva matriz que sea el resultado de sumar las dos matrices de entrada. 

Cada elemento de la nueva matriz debe ser la suma de los elementos correspondientes en las matrices de entrada.

*/

let matriz1 = [
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0]

]

let matriz2 = [
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1]

]

function sumaMatrices() {
    var resultado = [];
    
    for (var i = 0; i < matriz1.length; i++) {
      var fila = [];
      
      for (var j = 0; j < matriz1[i].length; j++) {
        fila.push(matriz1[i][j] + matriz2[i][j]);
      }
      
      resultado.push(fila);
    }
    
    return console.table(resultado);
  }

  sumaMatrices()