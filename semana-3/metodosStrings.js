// 1. Un string es un objeto.
// 2. Un metodo es UNA FUNCION QUE PERTNECE A UN OBJETO es decir a un STRING.

console.log ( "*--- METODOS DE STRINGS: LENGTH - INDEXOF - SLICE---*" );

let sagaRocky = "Rocky 1 - Rocky 2 - Rocky 3 - Rocky 4 - Rocky 5 - Rocky Balboa - Creed - Creed 2 - Creed 4"

let sinopsisJhonWick = "John Wick descubre un camino para derrotar a La Mesa, pero, antes de que pueda ganar su libertad, Wick debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos."

let sinopsisAir = "    Sigue la historia del vendedor de calzado Sonny Vaccaro, y cómo él llevó a Nike en su búsqueda del mejor atleta en la historia del baloncesto: Michael Jordan.    "

console.log(sinopsisJhonWick.length);
console.log(sinopsisJhonWick.indexOf("libertad"));
console.log(sinopsisJhonWick.slice (0, 138));

console.log ( "*--- TRIM ---*" ); // RECORTA LOS ESPACIOS AL PRINCIPIO Y AL FINAL.

console.log("SIN TRIM: ", sinopsisAir);
console.log("CON TRIM: ", sinopsisAir.trim());

console.log ( "*--- SPLIT ---*" ); // transforma un string en un Array

console.log ("SIN SPLIT: ", sagaRocky);
console.log ( sagaRocky.split(" - ") );

console.log ( "*--- REPLACE ---*" );

console.log ( sagaRocky.replace("Creed 4", "Creed 3") );






