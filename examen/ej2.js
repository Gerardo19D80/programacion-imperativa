/*

1. Deberás escribir un objeto literal llamado turista que contenga las siguientes
propiedades que deberás completar con tus datos:

a. nombre
b. apellido
c. temperatura

2. Teniendo en cuenta los datos del punto número 1:

A. Crear una función que reciba por parámetro el objeto y retorne un string en base
a las siguientes condiciones :

- si temperatura es menor a 37: “puede pasar”,

- si temperatura es mayor o igual a 37: “no puede pasar“

*Deberás realizar la invocación de la función de forma que se pueda ver el resultado

*/

let turista = {
    nombre: "Gerardo",
    apellido: "Daglio",
    temperatura: 38,
}

function test (){
    if(turista.temperatura < 37) console.log(`el turista puede pasar. La fiebre es: ${turista.temperatura}`);
    if(turista.temperatura >= 37) console.log(`el turista no puede pasar. La fiebre es: ${turista.temperatura}` );
}

test();
