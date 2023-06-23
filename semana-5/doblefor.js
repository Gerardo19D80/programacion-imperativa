/*

Recorrido de un matriz

Cuando recorremos una matriz, tenemos 4 posibles formas de hacerlo. Podemos
recorrer solo una fila, solo una columna, recorrerla por filas o recorrerla por columnas.
Veamos cada una de estas situaciones.

*/


let arrayMatrizA = [
    [1, 2, 3, 5, 7], // [0]
    [0, 2, 4, 6], // para recorrer este array se coloca [1]
    [8, 9, 10, 11], // [2]
]

console.table(arrayMatrizA);

console.log ("--- *** RECORREMOS LA FILA EN LA POSICION 1 *** ---");
console.log ("");

for ( let i = 0 ; i < arrayMatrizA[1].length; i++ ){
   
    console.log( arrayMatrizA[1][i] ); // Al acceder a los elementos matriz[1][i], mantenemos fija la fila.

}

console.log ("");
console.log ("--- *** RECORREMOS LA COLUMNA EN LA POSICION 2 *** ---");
console.log ("");

for ( let i = 0 ; i < arrayMatrizA.length ; i++) {
    
    console.log( arrayMatrizA[i][2] ); // Al acceder a los elementos matriz[i][2], mantenemos fija la columna.

}

console.log ("");
console.log ("--- *** D O B L E *** F O R *** -- *** RECORREMOS LAS FILAS *** ---");
console.log ("");

for (let fila = 0; fila < arrayMatrizA.length; fila++) {
    
    for(let columna = 0; columna < arrayMatrizA[fila].length; columna++){
    
        console.log( arrayMatrizA[fila][columna]) ;}
    
    }

    console.log ("");
    console.log ("--- *** D O B L E *** F O R *** -- *** RECORREMOS LAS COLUMNAS *** ---");
    console.log ("");

      
      // Obtener el número de columnas
      let columnas = arrayMatrizA[0].length;
      
      // Iterar por columnas
      for (let columna = 0; columna < columnas; columna++) {
        // Iterar por filas
        for (let fila = 0; fila < arrayMatrizA.length; fila++) {
          // Acceder al elemento de la matriz en la columna y fila actual
          let elemento = arrayMatrizA[fila][columna];
          console.log(elemento);
        }
        console.log("------"); // Separador entre columnas
      }



   