/*

Realizá un programa que permita ingresar el valor monetario de una hora de trabajo y la
cantidad de horas trabajadas por día por un trabajador. Debes mostrar el valor del salario
semanal, sabiendo que trabaja todos los días hábiles y la mitad de las horas del día hábil los
sábados. (Todas las horas valen lo mismo.)

*/

let valorHora = 10;
let horasTrabajadasDiaria = 8;
let horasTrabajadasSabado = horasTrabajadasDiaria / 2;
let semana = 5;

function salarioSemanal () {
    return console.log(((valorHora * horasTrabajadasDiaria) * semana) + (horasTrabajadasSabado*valorHora))
}

salarioSemanal()





