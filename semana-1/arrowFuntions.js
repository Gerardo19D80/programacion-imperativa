// forma clasica
function sumar (a, b) {
    return a + b;
}
console.log("1. usando la version clasica: ",sumar (2,5));

// ES6 arrow function
let sumarArrow = (a, b) => a + b;
console.log ("2. usando arrow function: ", sumarArrow (2,4));

let laMitad = numero => numero / 2;
console.log("3. este resultado me muestra la mitad de un numero: ", laMitad(8));

let dividir = (numeroA, numeroB) => numeroA/ numeroB;
console.log("4. este resultado me muestra la division:", (20,4));


let dameCinco = (a,b,c,d,e) => [a, b, c, d, e];
console.log(dameCinco(1,2,3,4,5));

let multiplicarPorDos = numero => numero *2;
console.log(multiplicarPorDos (3));

let mostrarNombre = () => "mi nombre es Hernan";
console.log(mostrarNombre());


let saludar = nombre => "hola " + nombre + " !";
console.log (saludar ("Ezequiel"));

let saludar1 = (nombre, apellido) => "hola " + nombre + apellido + " !";
console.log (saludar1 ("Gerardo", "Daglio"));