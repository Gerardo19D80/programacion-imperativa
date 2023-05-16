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