
// Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase.

let texto = "string"
console.log(texto.length)

/* Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.
2. La palabra que vamos a buscar para reemplazar.
3. La palabra que vamos a usar para reemplazar.
La función deberá devolver el texto con la palabra reemplazada.

Ejemplo:
let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'

*/

function reemplazoFastFast () {
    let texto = ['Este texto es mala onda', 'mala', 'buena'];
    return texto.replace ('mala', 'muy buena');
}

console.log(reemplazoFastFast ())