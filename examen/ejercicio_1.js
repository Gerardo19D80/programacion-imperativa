/*

Desarrollar una función para cada uno de las siguientes apartados: 
- Que reciba por parámetro 1 número, le sume 10, y verifique que si ese resultado es múltiplo de 5. Si lo es, tiene que retornar la frase:  ‘[número] + 10 es múltiplo de 5’, sino, retornará ‘[número] + 10 no es múltiplo de 5’.
- Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
- Que acepte un arreglo de números y devuelva la suma de todos ellos.

*/

console.log("--- *** MULTIPLO DE 5 *** ---")
console.log("")

function unNumero (numero){
    resultado = numero +10; 
    if (resultado % 5 == 0) return console.log (`el numero ${resultado} es multiplo de 5`);
    else console.log (`el numero ${resultado} NO es multiplo de 5`);
}

unNumero(7);

console.log("")
console.log("--- *** MULTIPLICA DOS NUMEROS ENTEROS *** ---")
console.log("")

function multiplicando (nA, nB) {
    return multiplica = (nA * nB);
}
console.log (multiplicando(3, 2));

console.log("")
console.log("--- *** LISTADO DE ARREGLOS *** ---")
console.log("")

let arreglo = [1,2,3,4,5]

function sumaArreglo () {
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        console.log(suma += arreglo[i])
    }
    console.log("")
    console.log (`el resultado ${suma} es el total de la suma del arreglo`);
}

sumaArreglo();
