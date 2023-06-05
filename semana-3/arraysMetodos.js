

let series = ["Game of Thrones", "House of Cards", "The Crown"];
let seriesEpicas = ["House of Dragon"]
let serie = ["The mandalorian", true, 2023, "Temporada 3"];
let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien', series];

//console.log(miArray);
//console.log(pelisFavoritas[3]);
//console.log(pelisFavoritas.length);

console.log ( "*---METODOS DE ARRAY 1. PUSH/POP 2. SHIFT/UNSHIFT---*" );
console.log ( "*--- PUSH ---*" );

let colores = ['Rojo','Naranja','Azul'];
let coloresBrillantes = ['Plata']
console.log (colores);
colores.push('Violeta'); // retorna 4
console.log(colores); // ['Rojo','Naranja','Azul','Violeta']
colores.push('Gris','Oro');
console.log(colores); //['Rojo','Naranja','Azul','Violeta','Gris','Oro']

console.log ( "*--- POP ---*" );

let ultimaSerie = colores.pop(); // creamos una variable para guardar lo que devuelve .pop()

console.log(colores);
console.log(ultimaSerie); // me muestra que Ultima serie se queda con el valor

coloresBrillantes.push(ultimaSerie); // el valor qu eme queda libre lo llevo a otra serie llamada colores brillantes
console.log (coloresBrillantes);

console.log ( "*--- SHIFT / UNSHIFT ---*" ); // SHIFT. Elimina el primer elemento de un array. UNSHIFT Agrega uno o varios elementos al principio de un array.

let serieDescartada = series.shift();
seriesEpicas.unshift(serieDescartada);

console.log(series); 
console.log(serieDescartada);
console.log(seriesEpicas);

console.log ( "*---METODOS DE ARRAY 1. JOIN, INDEXOF, LAST INDEX OF, INCLUDES---*" );
console.log(pelisFavoritas.join(" - "));
console.log(seriesEpicas.indexOf("Vikings")); // retorna un -1 porque no lo encuentra en el Array.
console.log(series.lastIndexOf("House of Cards"));
console.log(series.includes("House of Cards"));


console.log( "*--- OTRA MANERA DE CREAR UN INDEX OF ---*" );
let posicionKillBill = pelisFavoritas.indexOf("Kill Bill");
console.log(posicionKillBill);

console.log( "*--- ASOCIANDO UN IF ---*" );
if (posicionKillBill !=-1) return console.log("*** --- Encontre la pelicula que estabas buscando --- ***");



