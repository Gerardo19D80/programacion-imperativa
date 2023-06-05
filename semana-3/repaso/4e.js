/*

Ejercicio 4:

1. Crea un objeto literal llamado libro con las propiedades titulo, autor y anioPublicacion. Luego, muestra cada propiedad del objeto por separado por consola.


2. Crea un método llamado obtenerTituloAutor para el objeto libro del ejercicio anterior. El método debe retornar un string con el título y el autor del libro. Luego, llama al método y muestra el resultado por consola.

*/

let libro = {
    titulo: "El libro de Edgar Allan Poe",
    autor: "Edgar Allan Poe",
    anioPublicacion: 1623,
    obtenerTituloAutor: function () {
        return this.titulo + " - " + this.autor;
    }
}

console.log(libro.obtenerTituloAutor())

