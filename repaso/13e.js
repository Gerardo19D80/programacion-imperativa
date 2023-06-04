/*

Realizá un programa para ingresar tres números enteros e indique cuál de ellos es el mayor y
su valor.

*/

function elMayorEs (a, b, c) {
    if (a > b && a > c) {
        return console.log (a)
    }else if (b > a && b > c) {
        return console.log (b)
    } else {
        return console.log (c)
}
}

elMayorEs (2,1,3)