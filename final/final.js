/*
EJERCICIO 1
Dado el siguiente arreglo de objetos: Realizar una función que reciba por parámetro dicho arreglo y retorne un nuevo array con los objetos cuyo año de creación sea mayor a 1800.

*/

let cuadros = [
    {
        nombre : "Mona Lisa",
        creador : "Leonardo Da Vinci",
        creacion : 1503
    },
    {
        nombre : "La ultima cena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    },
    {
        nombre : "La noche estrellada",
        creador : "Vincent van Gogh",
        creacion : 1889
    },
    {
        nombre : "El grito",
        creador : "Edvard Munch",
        creacion : 1893
    },
    {
        nombre : "Trigal con cuervos",
        creador : "Vincent van Gogh",
        creacion : 1890
    },
    {
        nombre : "Maria Magdalena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    }
]

console.log ("--- *** EJERCICIO 1 *** ---")
console.log (" ")

function sigloXIX () {
    
    let cuadrosVersionDos = []
    for (i = 0; i < cuadros.length; i++) {

            if (cuadros[i].creacion >= 1800)

            cuadrosVersionDos.push(cuadros[i])
    }   
    return cuadrosVersionDos
}

console.table(sigloXIX());


/*
EJERCICIO 2
Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort según su año de  creación de forma ascendente o descendente según lo indique el string recibido por parámetro, teniendo en cuenta los siguientes criterios:

- Si el String es “ASC” o “asc” encontes ordenar de menor a mayor.

- Si el String es “DESC” o “desc” entonces ordenar de mayor a menor.

*/

console.log (" ")
console.log ("--- *** EJERCICIO 2 *** ---")
console.log (" ")

function bubbleSortCuadros(cuadros, orden) {
    for (let i = 0; i < cuadros.length; i++) {
      for (let j = 0; j < cuadros.length - 1; j++) {
        if (orden === "DESC" || orden === "desc") {
          if (cuadros[j].creacion < cuadros[j + 1].creacion) {
            let auxiliar = cuadros[j];
            cuadros[j] = cuadros[j + 1];
            cuadros[j + 1] = auxiliar;
          }
        } else {
          if (cuadros[j].creacion > cuadros[j + 1].creacion) {
            let auxiliar = cuadros[j];
            cuadros[j] = cuadros[j + 1];
            cuadros[j + 1] = auxiliar;
          }
        }
      }
    }
  }
  
  bubbleSortCuadros(cuadros, "asc"); 
  console.table(cuadros);

console.log (" ")
console.log ("--- *** EJERCICIO 3 *** ---")
console.log (" ")

/*
EJERCICIO 3
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