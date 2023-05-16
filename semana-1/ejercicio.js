

let temperatura = 25;
console.log ('La temperatura es: ', temperatura, ' grados');

let estaLloviendo = true;
console.log ('Esta lloviendo: ', estaLloviendo);

let pisoAscensor = 4;
console.log ('El piso en el que vive: ' + pisoAscensor);

let horaApertura = 8;
console.log ('La hora de apertura es: ', horaApertura);

let horaCierre = 21;
console.log ('La hora de cierre es: ', horaCierre);

let queso = 100;
console.log ('La cantidad es:', queso,' gramos');

let deuda = 500;
console.log ('La deuda con Monica es:', deuda,' pesos');

let horaActual = () => {
    let fecha = new Date ();
    return fecha.getHours()  + ' : ' + fecha.getMinutes();
}

console.log ('La hora actual es:', horaActual());



