/*

Realizá un programa que permita ingresar la cantidad de inscriptos a una conferencia y la
cantidad de asientos disponibles en el auditorio. Debes indicar si alcanzan los asientos, Si los
asientos no alcanzaran indicar cuántos faltan para que todos los inscriptos puedan sentarse.

*/

function conferencia (inscriptos, asientosDisponibles){
    if (inscriptos > asientosDisponibles) return console.log ("La cantidad de inscriptos es: ", inscriptos, "faltan ", (inscriptos - asientosDisponibles), "sillas")
    if (inscriptos < asientosDisponibles) return console.log ("La cantidad de inscriptos es: ", inscriptos, "sobran ", (asientosDisponibles - inscriptos), "sillas")
}

conferencia (30,50)
