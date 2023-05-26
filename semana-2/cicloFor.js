/*

Un ciclo —ya sea en programación o en la vida cotidiana— 
es una serie de estados por los que pasa un acontecimiento o fenómeno, que se repiten siempre en el mismo orden. 
En programación, para hacer que nuestro código se siga ejecutando, mientras una condición se cumpla, utilizamos el FOR.


*/

/*
for (let vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número ' + vuelta);
  };

// FOR ESTRUCTURA
// Paso 1. Inicio. Antes de arrancar el ciclo, se establece el valor inicial de nuestro contador.
// Paso 2. Condicion. Antes de ejecutar el código en cada vuelta, se pregunta si la condición resulta verdadera o falsa.
// Paso 3. Modificador —incremento o decremento— Luego de ejecutar nuestras instrucciones, se modifica nuestro contador de la manera que hayamos especificado. 
// En este caso se le suma 1, pero podemos hacer la cuenta que queramos.


console.log ("*----------FUNCION EL LORO QUE REPITE----------*");

function loro (frasePreferida) {
    for (let frase = 1; frase <= 10; frase++) {
        console.log("el loro repite y repite su frase preferida" + frasePreferida + " por " + frase + " vez.");
      }
}

loro ("Aguante JavaScript");

console.log ("*----------FUNCION QUE CUENTA NUMERO IMPAR----------*");

function noParesDeContarImparesHasta(x) {
    
  for (let impar = 1; impar <= x; impar = impar + 2){
    console.log (impar);
  }
}
 
noParesDeContarImparesHasta(4);
 

console.log ("*----------FUNCION QUE CUENTA HASTA 10----------*");

function contarHastaDiez () {

  for (let i = 0; i <=10; i += 1) { // tambien puede usar i++ en vez de i += 1
    console.log (i);  
  }

}

contarHastaDiez ();


console.log ("*---------- FUNCION QUE CUENTA CADA TRES ----------*");

function saltaTres (){
  for (let i = 5; i <=20; i += 3) { 
    console.log (i);  
  }

}

saltaTres ();

*/

console.log ("*---------- FUNCION QUE SUMA TODOS LOS VALORES DESDE EL 1 AL 100 ----------*");

function mostrarSuma (){
  let suma= 0;
  for (let i = 0; i <=100; i++) {
    console.log(suma +=i);
  } 
    console.log ("La suma es: ", suma);
}

mostrarSuma ();
 
