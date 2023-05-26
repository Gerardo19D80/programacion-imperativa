// crtl + c o cmd + c corto la ejecucion del codigo.

/*
WHILE & DO WHILE

Tiene una estructura similar a la de los condicionales if/else, palabra reservada + condición entre paréntesis. Sin embargo, el while Loop revalúa esa condición repetidas veces y ejecuta su bloque de código hasta que la condición deja de ser verdadera.

while (condicion) {
    //código que se ejecutará en cada repetición
    // Hace algo para que la condición eventualmente se deje de cumplir
    
    }

*/

/*
let vuelta = 6;

while(vuelta <= 5) {
  console.log(' WHILE **-** Dando la vuelta número ' + vuelta); //código que se ejecutará en cada repetición
  vuelta++ // Hace algo para que la condición eventualmente se deje de cumplir
};

// El ciclo do while es similar al while, pero se diferencia en que, sin importar la condición, la acción se realizará al menos una vez.

let vuelta1 = 6;

do{
  console.log('DO WHILE **-** Dando la vuelta número ' + vuelta1);
  vuelta1++ //Se suma 1 a vuelta por lo tanto vuelta = 6

} while(vuelta1 <= 5); //al vuelta ser 6 la condición retorna false y se termina el bloque de código
*/

/*
let tablaDel = 5;
tablaDeMultiplicar (1)

function tablaDeMultiplicar(i) {
    while(i <= 10) {
        console.log("Multiplicando " + tablaDel + " por " + i + " = ", i * tablaDel);
        i++
      };  
}
*/
/*
let numero = 1
tablaDeMultiplicar (5)

function tablaDeMultiplicar(i) {
    while(numero <= 10) {
        console.log("Multiplicando " + i + " por " + numero + " = ", i * numero);
        numero++
      };  
}

console.log ("*---------- FUNCION QUE CUENTA HASTA 10 CON WHILE Y DO WHILE ----------*")

// num++ - primero muestra el numero y luego incrementa. 
// ++num - inverso a num++

/*let num = 0;

while (num <= 10) {
  console.log (num++);
}

*/

let n = 0;
do { 
    
  console.log (n++);

  } while (num <= 10)


