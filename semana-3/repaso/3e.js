/*

Ejercicio 3:

Crea una función llamada obtenerInformacion que reciba un objeto persona como parámetro y retorne un string con su nombre y edad. Luego, llama a la función pasando el objeto persona del ejercicio anterior y muestra el resultado por consola.

*/

let persona ={
    nombre:"Juan",
    edad:25,
    profesion: "electricista",
}

function obtenerInformacion () {
    return `Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;
}

console.log(obtenerInformacion())