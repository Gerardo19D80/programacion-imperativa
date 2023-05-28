//= algoritmos

/*
function factorial (n) {
    if (n === 0 || n === 1){
        return 1;
    } else {
        return n * factorial (n - 1);
    }
}

console.log (factorial(5)); //5! = 5 x 4 x 3 x 2 x 1 = 120
*/

/*

El factorial de un número entero positivo n, representado como n!, es el producto de todos los 
números enteros positivos desde 1 hasta n. Esto significa que si tienes un número como 5, su factorial (5!) 
se calcula multiplicando todos los números enteros positivos desde 1 hasta 5 de la siguiente manera:

5! = 5 x 4 x 3 x 2 x 1 = 120

1. La función factorial() toma un argumento n, que es el número para el cual queremos calcular el factorial.

2. En la primera línea de la función, se verifica si n es igual a 0 o 1. Si es así, se retorna 1, ya que el factorial de 0 y 1 es siempre 1. 
Esta es la condición de terminación de la recursión.

3. Si n no es 0 ni 1, entonces se ejecuta el bloque de código en el else statement.

4. En el else statement, se realiza una llamada recursiva a la función factorial() pasando n-1 como argumento. Esto significa que calcularemos 
el factorial del número anterior a n (es decir, n-1).

5. La llamada recursiva se mantiene repitiendo hasta que se alcance la condición de terminación cuando n sea 0 o 1.

6. Una vez que la llamada recursiva llega a 0 o 1, los resultados se empiezan a devolver de vuelta a través de las llamadas recursivas anteriores.

7. Cada llamada recursiva multiplica n por el resultado de la llamada recursiva anterior.

Ahora, si ejecutamos console.log(factorial(5)), estamos pasando el valor 5 como argumento a la función factorial(). 
A continuación, se muestra una traza de cómo se resuelve:

1. factorial(5) llama a factorial(4) y multiplica el resultado por 5.
2. factorial(4) llama a factorial(3) y multiplica el resultado por 4.
3. factorial(3) llama a factorial(2) y multiplica el resultado por 3.
4. factorial(2) llama a factorial(1) y multiplica el resultado por 2.
5. factorial(1) alcanza la condición de terminación y devuelve 1.

Las llamadas recursivas anteriores se resuelven sucesivamente multiplicando los resultados: 2 * 1 * 3 * 4 * 5 = 120.

Finalmente, factorial(5) devuelve 120, que es el factorial de 5.


*/

function factorial2 (number) {
    if (number < 0) return "el dominio de la funcion son numeros naturales";
    if (number === 0 ) return 1;
    let factorial2 = number;
    while (number > 1) {

        factorial2 *= --number; // factorial2 = factorial2 * (numero -1);

    }

    return factorial2
}

console.log (factorial2(5));


