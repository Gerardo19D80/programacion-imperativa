/*

Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort según su año de  creación de forma ascendente o descendente según lo indique el string recibido por parámetro, teniendo en cuenta los siguientes criterios:

- Si el String es “ASC” o “asc” encontes ordenar de menor a mayor.

- Si el String es “DESC” o “desc” entonces ordenar de mayor a menor.

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