
//ejercicio ejemplo PG:
function elDoble (unNumero) {
    return unNumero * 2;
};
console.log ("1. ", elDoble (6)); //12

// Funcion expresada:

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}
console.log ("2. funcion expresada: ", sumar (7,9));

let ejemplo = function (){
    let saludo = "hola soy una funcion expresada";
    return saludo;
}
console.log( "2.1", ejemplo());

// Funcion declarada:
function restar (numeroC, numeroD) {
    return numeroC - numeroD
}
console.log ("3. funcion declarada: ", restar(10,4));

//Scope local
function hola (){
    let saludo = "hola que tal?";
    return saludo;
}
console.log("4. ejemplo de scope local: ", hola());

//Scope global
let elMejorLenguaje = "Javascript, es lo mas";

function estoyAprendiendo() {
    return elMejorLenguaje;
}
console.log("5. ejemplo de scope global: ",estoyAprendiendo());

//Ejercicio PG
function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

console.log("6. ",saludar("Gerardo", "Daglio"));

//Ejemplos:
//7. Menos uno:

function menosUno (unNumero) {
    return unNumero - 1;
};
console.log ("7. ", menosUno (6));

//triple:

function triple (unNumero) {
    return unNumero * 3;
};
console.log ("8. ", triple (3));

//triple -1:

function anteriorDelTriple(numero) {
    let triple = numero * 3;
    let anterior = triple - 1;
    return anterior;
  }

  console.log ("9. ",anteriorDelTriple(3));

