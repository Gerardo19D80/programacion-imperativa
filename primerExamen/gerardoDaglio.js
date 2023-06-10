console.log("--- --- ****** EJERCICIO 1 ****** --- ---")
console.log("")
/*

Desarrollar una función para cada uno de las siguientes apartados: 
- Que reciba por parámetro 1 número, le sume 10, y verifique que si ese resultado es múltiplo de 5. Si lo es, tiene que retornar la frase:  ‘[número] + 10 es múltiplo de 5’, sino, retornará ‘[número] + 10 no es múltiplo de 5’.
- Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
- Que acepte un arreglo de números y devuelva la suma de todos ellos.

*/

console.log("--- *** MULTIPLO DE 5 *** ---")
console.log("")

function unNumero (numero){
    resultado = numero +10; 
    if (resultado % 5 == 0) return console.log (`el numero ${resultado} es multiplo de 5`);
    else console.log (`el numero ${resultado} NO es multiplo de 5`);
}

unNumero(7);

console.log("")
console.log("--- *** MULTIPLICA DOS NUMEROS ENTEROS *** ---")
console.log("")

function multiplicando (nA, nB) {
    return multiplica = (nA * nB);
}
console.log (multiplicando(3, 2));

console.log("")
console.log("--- *** LISTADO DE ARREGLOS *** ---")
console.log("")

let arreglo = [1,2,3,4,5]

function sumaArreglo () {
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        console.log(suma += arreglo[i])
    }
    console.log("")
    console.log (`el resultado ${suma} es el total de la suma del arreglo`);
}

sumaArreglo();

console.log("")
console.log("--- --- ****** EJERCICIO 2 ****** --- ---")
console.log("")

/*

Deberás escribir un objeto literal llamado empresa que contenga las siguientes propiedades:

nombre string
actividad string
sueldos array de 10 números


2. Teniendo en cuenta los datos del punto número 1:
Crear un método del objeto que calcule los sueldos que paga la empresa y si supera los 200.000 retornará:  ‘La empresa [nombre] se encuentra en quiebra ya que su pago de sueldos es de  [sueldos] por lo tanto, necesita hacer un ajuste en sus empleados’ , y si no retornará: ‘La empresa [nombre] esta bien economicamente, ya que su pago de sueldos es de [sueldos] por lo tanto, NO necesita hacer un ajuste en sus empleados’

*/

let empresa = {
    nombre: "Gerardo Daglio S.A",
    actividad: "Ventas",
    sueldos: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
}

function calculadoraDeSueldos() {
    let suma = 0;
    for (let i = 0; i < empresa.sueldos.length; i++) {
        suma += empresa.sueldos[i];
        if (suma > 200000) {
            console.log(`La empresa ${empresa.nombre} se encuentra en quiebra ya que su pago de sueldos es de ${suma} por lo tanto, necesita hacer un ajuste en sus empleados.`);
            return;
        }
    }
    console.log(`La empresa ${empresa.nombre} está bien económicamente, ya que su pago de sueldos es de ${suma} por lo tanto, NO necesita hacer un ajuste en sus empleados.`);
}

calculadoraDeSueldos();


console.log("")
console.log("--- --- ****** EJERCICIO 3 ****** --- ---")
console.log("")

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



let libros = []
libros.push(historiasInconscientes);
libros.push(elAlquimista);
libros.push(elCampamento);
libros.push(operacionMasacre);


console.log(libros);

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