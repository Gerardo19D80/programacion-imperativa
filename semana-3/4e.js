
let peli = ["Star Wars", "The Mandalorian"];


function MAYUSC() {
    for (let i = 0; i < peli.length; i++) { // = un simple igual puede no hacer funcionar la funcion
        peli[i] = peli[i].toUpperCase();
    }
    return peli
}

console.log(MAYUSC());