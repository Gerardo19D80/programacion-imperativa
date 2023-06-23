const array = [5, 12, 2, 40, 33, 2, 90];

function elMayor() {
  let mayor = array[0]; // Asignar el primer elemento del array como el mayor inicialmente
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i]; // Actualizar el mayor si encontramos un número mayor en el array
    }
  }
  console.log(`El número mayor es ${mayor}`);
}

elMayor(); // Output: El número mayor es 40
