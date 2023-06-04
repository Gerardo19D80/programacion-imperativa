/* 

Realizá un programa que permita ingresar una edad (entre 1 y 120 años) y un género ('F'
para mujeres, 'M' para hombres). En caso de haber ingresado valores erróneos (edad fuera
de rango o género inválido), informar tal situación. Si los datos están bien ingresados el
programa debe indicar, sabiendo que las mujeres se jubilan con 60 años o más y los hombres
con 65 años o más, si la persona está en edad de jubilarse.

*/

function jubilacion (edad, genero){
    if (edad < 1 || edad > 120) return console.log ("ingrese una edad valida");
    if (genero !== "M" && genero !== "F") return console.log ("ingrese un genero valido");
    if (edad >= 65 && genero === "M") return console.log ("Sr. usted esta en edad de jubilarse");
    if (edad >= 60 && genero === "F") return console.log ("Sra. usted esta en edad de jubilarse");
    else return console.log ("Usted no esta en edad de jubilarse");
}

jubilacion (63, "F")