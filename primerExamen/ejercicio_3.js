/*

Crear un array vacío, que tenga el nombre libros.

Usando estos 4 objetos:

Deberás agregarlos al array utilizando un método de array.
Mostrar por consola el array para ver que contenga esos objetos.
Deberás crear una función que reciba el array libros como parámetro, y si el año de lanzamiento es anterior a 2020, deberá agregar una propiedad a cada objeto que se llame época y tenga el valor pre-pandemia, si el año es posterior o igual a 2020 el valor de la propiedad época será post-pandemia.

*/

let historiasInconscientes = {
    anio  : 2013,
    autor : "Gabriel Rolón",
    paginas: 352
 }
 let elAlquimista = {
     anio  : 1988,
    autor : "Paulo Coehlo",
    paginas: 192
 }
 let elCampamento = {
    anio  : 2021,
    autor : "Blue Jeans",
    paginas: 480
 }
 let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
 }


historiasInconscientes.titulo = "Historias Inconscientes";
elAlquimista.titulo = "El Alquimista";
elCampamento.titulo = "El Campamento";
operacionMasacre.titulo = "Operación Masacre";

let libros = []
libros.push(historiasInconscientes);
libros.push(elAlquimista);
libros.push(elCampamento);
libros.push(operacionMasacre);

console.log("")
console.log("--- *** LIBROS *** ---")
console.log("")
console.log(libros);

console.log("")
console.log("--- *** MOMENTO HISTORICO *** ---")
console.log("")

function momento(libros) {
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].anio < 2020) {
      libros[i].epoca = "pre-pandemia";
    } else {
      libros[i].epoca = "post-pandemia";
    }
  }
}

momento(libros);
console.log(libros); 