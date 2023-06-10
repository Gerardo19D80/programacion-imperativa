/*

Deberás escribir un objeto literal llamado empresa que contenga las siguientes propiedades:

nombre string
actividad string
sueldos array de 10 números


2. Teniendo en cuenta los datos del punto número 1:
Crear un método del objeto que calcule los sueldos que paga la empresa y si supera los 200.000 retornará:  ‘La empresa [nombre] se encuentra en quiebra ya que su pago de sueldos es de  [sueldos] por lo tanto, necesita hacer un ajuste en sus empleados’ , y si no retornará: ‘La empresa [nombre] esta bien economicamente, ya que su pago de sueldos es de [sueldos] por lo tanto, NO necesita hacer un ajuste en sus empleados’

*/

let empresa = {
    nombre: "Gerardo Daglio S.A",
    actividad: "Ventas",
    sueldos: [100, 200, 300, 400, 500, 600, 700, 800, 900, 300000]
}

function calculadoraDeSueldos() {
    let suma = 0;
    for (let i = 0; i < empresa.sueldos.length; i++) {
        suma += empresa.sueldos[i];
        if (suma > 200000) {
            console.log(`La empresa ${empresa.nombre} se encuentra en quiebra ya que su pago de sueldos es de ${suma} por lo tanto, necesita hacer un ajuste en sus empleados.`);
            return;
        }
    }
    console.log(`La empresa ${empresa.nombre} está bien económicamente, ya que su pago de sueldos es de ${suma} por lo tanto, NO necesita hacer un ajuste en sus empleados.`);
}

calculadoraDeSueldos();
