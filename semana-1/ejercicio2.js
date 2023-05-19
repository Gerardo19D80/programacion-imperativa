/*Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón
de los pantalones ¡Un horror! ¿Cómo haríamos para invertirlos?
Pensá con qué código podrías invertir el contenido de las variables de cajones.*/


let cajonDePantalones = ['remeras','jeans', 'pantalones', 'shorts'];
let cajonDeRemeras = ['chombas', 'camisas'];

// Encontrar el índice del string en el array de origen
let indice = cajonDePantalones.indexOf('remeras');

// Verificar si el string existe en el array de origen
if (indice !== -1) {
  // Eliminar el elemento del array de origen
  cajonDePantalones.splice(indice, 1);

  // Agregar el elemento al array de destino
  cajonDeRemeras.push('remeras');
}

console.log(cajonDePantalones); // ['jeans', 'pantalones', 'shorts']
console.log(cajonDeRemeras);   // ['chombas', 'camisas', 'remeras']

/*

En primer lugar, se definen dos arrays: cajonDePantalones y cajonDeRemeras. 
El array cajonDePantalones contiene los elementos "remeras", "jeans", "pantalones" y "shorts", mientras que; 
el array cajonDeRemeras contiene los elementos "chombas" y "camisas". 

A continuación, se utiliza el método indexOf en el array cajonDePantalones para encontrar el índice del elemento "remeras".
 El resultado se almacena en la variable indice. Después, se verifica si el índice es diferente de -1, 
lo que significa que se encontró el elemento en el array de origen. 
En caso afirmativo, se utiliza el método splice para eliminar el elemento del array cajonDePantalones. 

El método splice recibe dos argumentos: el índice del elemento a eliminar y la cantidad de elementos a eliminar a partir de ese índice. En este caso, se elimina un solo elemento. 

Finalmente, se agrega el elemento "remeras" al array cajonDeRemeras utilizando el método push. 

Al imprimir los arrays cajonDePantalones y cajonDeRemeras en la consola, se muestra el resultado después de realizar la operación. 

El array cajonDePantalones ahora contiene los elementos "jeans", "pantalones" y "shorts", 
mientras que el array cajonDeRemeras contiene los elementos "chombas", "camisas" y "remeras".

*/

