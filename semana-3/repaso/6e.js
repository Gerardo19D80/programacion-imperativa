/*

Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.

En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.

*/

let traductor = "casa";

switch (traductor) {
    case "casa":
        console.log (`La traduccion de ${traductor} es house`) // otra manera de expresarlo.
        break;
    case "perro":
        console.log ("La traduccion de " + traductor + " es dog")
        break;
    case "pelota":
        console.log ("La traduccion de " + traductor + " es ball")
    break;
    case "arbol":
        console.log ("La traduccion de " + traductor + " es tree")
    break;
    case "genio":
        console.log ("La traduccion de " + traductor + " es genius")
    break;
    
    default: console.log("La palabra ingresada es incorrecta.")
}