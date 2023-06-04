/*

Realizá un programa que permita ingresar el ancho y el largo de un terreno en metros y el
valor del metro cuadrado de tierra. Debe mostrarse el valor total del terreno y la cantidad de
metros de alambre para cercarlo completamente a tres alturas distintas.

*/

function terreno (ancho, largo, valorMetro2) {
    return console.log ("valor terreno: " + ((ancho*largo) * valorMetro2) + " cantidad de metros de alambre: " + ((ancho+largo)*2)*3);
}

terreno(10,10, 1500)