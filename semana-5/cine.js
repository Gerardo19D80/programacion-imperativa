// Hemos definido una matriz que representa el estado de las butacas de un cine.

let butacasCine = [
['ocupado', 'libre', 'libre', 'libre'],// 0
['libre', 'libre', 'libre', 'libre'], // 1
['libre', 'libre', 'ocupado', 'ocupado'], // 2
['ocupado', 'ocupado', 'ocupado', 'ocupado'], // 3
['libre', 'libre', 'libre', 'libre'] // 4
];

let cantidadFilas = butacasCine.length; //*** Medimos la cantidad de filas.
// let cantidadColumnas = butacasCine[0].length; *** Medimos la cantidad de columnas de la fila 0.


let libres = false;

for (let i = 0; i < butacasCine[1].length; i++) {
  if (butacasCine[1][i] == 'libre') {
    libres = true;
  }
}

console.log(libres);