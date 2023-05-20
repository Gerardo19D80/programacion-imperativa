//4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

function edadPerruna (miEdad) {
    let edadCanina = miEdad * 7;
    return console.log("Mi edad es: ", miEdad, " y la de mi perro ", edadCanina);
}

edadPerruna (2);


function sueldoBasico (salario) {
    let horaTrabajo = (salario / 40);
    return console.log("Mi salario es: ", salario, " y mi hora trabajada ", horaTrabajo);
}

sueldoBasico (100);