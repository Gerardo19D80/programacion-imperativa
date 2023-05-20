
// OPERADORES LOGICOS
// OPERADOR DE ASIGNACION =

let paisDeNacimiento = "Argentina"

// + - * / %(Modulo resto o reciduo de una division)
// Incremento (++) o Decremento (--)

//Suma
console.log( 'el resultado de la suma es: ', 5 + 4 );

//Resta
console.log( 'el resultado de la resta es: ', 5 - 4 );

//Multiplicacion
console.log( 'el resultado de la multipicacion es: ', 5 * 4 );

// Division & Modulo
console.log('el resultado de la division y el resto de su divion es: ');
console.log( 6 / 2 );
console.log( 6 % 2 ); //muestra el resto de una division

//Incremento & Decremento

let incremento = 6;
let decremento = 5
console.log('el resultado del incremento y del decremento es: ');
console.log( ++incremento);
console.log( --decremento);

// Comparacion simple & Estricta

console.log( 'este es un ejemplo de comparacion simple: ', 5=="5");
console.log( 'este es un ejemplo de comparacion estricta: ', 5==="5"); //compara incluso el tipo de dato. Al ser uno de ellos un string es false.

// Desigualdad simple & Estricta

console.log( 'este es un ejemplo de desigualdad simple: ', 5!="5");
console.log( 'este es un ejemplo de desigualdad estricta: ', 5!=="5"); // en este caso es verdadero porque si la desigualdad es efectiva.

// Mayor que ... & Menor que ...

console.log( 'es mayor que: ', 6 > 6);
console.log( 'es mayor o igual que: ', 6 >= 6);

console.log( 'es menor que: ', 6 < 6);
console.log( 'es menor o igual que: ', 6 <= 6);

// AND (&&) and OR ( || ), Negacion (!), Concatenacion (+)

console.log("Otros puntos en general: AND (&&) and OR ( || ), Negacion (!), Concatenacion (+) ");
console.log( "AND: ", false && true );
console.log( "OR: ", false || true );
console.log("Niega la condicion en este ejemplo le pusimos como valor false por lo que el resultado tiene que ser: ", !false);

let nombre = "Gerardo";
let apellido = "Daglio";
console.log ("Concatena nombre y apellido con un espacio en medio: ", nombre + " " + apellido);


//EJERCICIOS PLAYGROUND

console.log("Ejercicios de PG: ");

console.log("1. ", false | 3 == 4);
console.log("2. ", 10 >= 15 && 10 !== 11);
console.log("3. ", 12 % 2 == 0 && 12 !== 21);
console.log("4. ", 3+5 == "8" && 5-4 === 1);
console.log("5. ",'Zapato' == 'trampa' || "hola" <= "chau");
console.log("6. ","Gato" && "Perro");
console.log("7. ","Gato" || "Perro" );


