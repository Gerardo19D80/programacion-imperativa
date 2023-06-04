/*

Existen dos reglas que identifican dos conjuntos de valores:

a. El número es de un solo dígito.
b. El número es impar.

A partir de estas reglas, realizá un programa que permita ingresar un número entero. Debe
asignar el valor que corresponda a las variables booleanas esDeUnSoloDigito, esImpar,
estaEnAmbos y noEstaEnNinguno el valor Verdadero o Falso, según corresponda, para indicar si
el valor número ingresado pertenece o no a cada conjunto. Definí un lote de prueba de varios
números y probá el algoritmo, escribiendo los resultados tal como se hizo en los ejercicios
anteriores.

*/

let num = 7

    if (num <= 9 && num > 0 && num % 2 !== 0) return console.log ( true, "El numero es impar y es menor a 10");
    if (num <= 9 && num > 0 && num % 2 === 0) return console.log (esDeUnSoloDigito, noEstaEnNinguno);
