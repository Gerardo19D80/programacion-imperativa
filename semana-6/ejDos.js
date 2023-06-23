/*

El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.

A) Ordenar por temperatura máxima de mayor a menor.

B) Ordenar por temperatura mínima de menor a mayor.

*/

let temperatura = [
    
    {   
        dia : 2, 
        mes : 3, 
        temperaturaMax : 37, 
        temperaturaMin : 2, 
    },

    {   
        dia : 3, 
        mes : 4, 
        temperaturaMax : 35, 
        temperaturaMin : 1, 
    },

    {   
        dia : 7, 
        mes : 8, 
        temperaturaMax : 23, 
        temperaturaMin : 12, 
    },

    {   
        dia : 5, 
        mes : 6, 
        temperaturaMax : 29, 
        temperaturaMin : 1, 
    }

]

/* El ejercicio en la mesa

for(let i= 0; i < temperatura.length; i++) {
        //console.log("pasada: " + i);

    for (let j = 0; j < temperatura.length -1; j++) {
        //console.log("pasada: " + j); 
        if (temperatura[j].temperaturaMax > temperatura[j + 1].temperaturaMax) {
            let auxiliar = temperatura[j].temperaturaMax;
            temperatura[j].temperaturaMax = temperatura[j + 1].temperaturaMax;
            temperatura[j + 1].temperaturaMax = auxiliar;
            
         }
        
    }
    
}

console.log(temperatura)

*/

for (let i = 0; i < temperatura.length; i++) {
// Esta línea inicia un bucle for que recorrerá el array temperatura. La variable i  se inicializa en 0 y se incrementará en cada iteración hasta que sea menor que la longitud del array temperatura.

    for (let j = 0; j < temperatura.length - 1; j++) {
// Dentro del bucle anterior, se inicia otro bucle for con la variable j. Este bucle también recorre el array temperatura. La variable j se inicializa en 0 y se incrementará en cada iteración hasta que sea menor que la longitud del array temperatura menos 1.

        if (temperatura[j].temperaturaMax > temperatura[j + 1].temperaturaMax) {
        // Dentro del segundo bucle, se verifica si la temperatura máxima en el elemento actual (temperatura[j].temperaturaMax) es mayor que la temperatura máxima en el siguiente elemento (temperatura[j + 1].temperaturaMax).

             let auxiliar = temperatura[j];
             temperatura[j] = temperatura[j + 1];
             temperatura[j + 1] = auxiliar;
            // Si la condición del paso anterior se cumple, se crea una variable auxiliar y se le asigna el objeto de temperatura en la posición actual (temperatura[j]). temperatura[j] = temperatura[j + 1];: El objeto de temperatura en la posición actual (temperatura[j]) se reemplaza por el objeto de temperatura en la siguiente posición (temperatura[j + 1]). Esto es un intercambio de posiciones en el array.
            // El objeto de temperatura en la siguiente posición (temperatura[j + 1]) se reemplaza por el objeto almacenado en la variable auxiliar. Esto completa el intercambio de posiciones en el array. Después de que ambos bucles se completan, el código sale del bucle principal y llega a la siguiente línea.
        }
    }
}

console.log(temperatura);
// Finalmente, se imprime en la consola el array temperatura resultante después de aplicar el algoritmo de Bubble Sort. Este array estará ordenado por temperatura máxima de mayor a menor.
// El algoritmo de Bubble Sort funciona comparando elementos adyacentes y realizando intercambios si están en el orden incorrecto. Se repite este proceso varias veces hasta que el array esté completamente ordenado.
