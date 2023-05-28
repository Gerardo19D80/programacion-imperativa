/*

Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.

La secuencia de Fibonacci es una sucesión infinita de números en la cual cada término es la suma de los dos términos anteriores. La secuencia comienza con los números 0 y 1, y a partir de ahí se genera sumando los dos números anteriores. Por lo tanto, la secuencia de Fibonacci se ve así:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

Como puedes ver, cada número después del 0 y el 1 es la suma de los dos números anteriores. Por ejemplo, el tercer término es 1, que es la suma de 0 y 1. El cuarto término es 2, que es la suma de 1 y 1, y así sucesivamente.

Esta secuencia tiene muchas propiedades interesantes y está presente en diversos fenómenos de la naturaleza y las matemáticas. Se utiliza en muchos campos, como la informática, la economía, la biología y el arte.

*/

function fibonacciHasta(numero) {
    var secuencia = [0, 1]; // Inicializar la secuencia de Fibonacci con los primeros dos números
  
    while (secuencia[secuencia.length - 1] < numero) {
      var siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
      secuencia.push(siguienteNumero);
    }
  
    return secuencia;
  }
  
  // Ejemplo de uso
  var numeroIngresado = 100;
  var resultado = fibonacciHasta(numeroIngresado);
  console.log(resultado);


  function fibonacciHasta(numero) {
    var secuencia = [0, 1]; // Inicializar la secuencia de Fibonacci con los primeros dos números
  
    for (var i = 2; secuencia[i - 1] < numero; i++) {
      var siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
      secuencia.push(siguienteNumero);
    }
  
    return secuencia;
  }
  
  // Ejemplo de uso
  var numeroIngresado = 100;
  var resultado = fibonacciHasta(numeroIngresado);
  console.log(resultado);

