/*

a. Crea una función que reciba el array destinos como parámetro, e incremente en 1
la cantidad de visitas de cada uno de los destinos, llámala siguienteViaje.

* Debes utilizar alguna estructura de repetición vista en clase.

b. Mostrar por consola el array de destinos antes y después de la ejecución de la
función.

*/

let paises = [{
    cantidadDeVisitas: 3,
    clima: 'soleado',
    habitantes: '212 millones'
    },
    {
    cantidadDeVisitas: 4,
    clima: 'frío',
    habitantes: '144 millones'
    },
    {
    cantidadDeVisitas: 1,
    clima: 'nublado',
    habitantes: '329 millones'
    }
]

console.log("--- *** ANTES DE LA EJECUCION *** ---")
console.log("")

for (let i = 0; i < paises.length; i++) {
    console.log(`la cantidad de visitas de la posicion ${[i]}, es  ${paises[i].cantidadDeVisitas}`);
  }

console.log("")
console.log("--- *** DESPUES DE LA EJECUCION *** ---")
console.log("")

function siguienteViaje (){
    let destino = 0
    for (let i = 0; i < paises.length; i++) {
       destino = 1 + paises[i].cantidadDeVisitas;
       console.log(`sumando una visita mas en la posicion ${[i]} el resultado es ${destino}`)
    }
}

siguienteViaje();
