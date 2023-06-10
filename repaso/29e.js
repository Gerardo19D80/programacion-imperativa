const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: true,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]


console.log("*** --- cuentas cuyas edades sean menores a 30 --- ***")
console.log ("")

function jovenesAdultos () {
    for (let i = 0; i < arrayCuentas.length; i++){
    if (arrayCuentas[i].edadTitular < 30) {
        console.log(arrayCuentas[i].titular);
    }}
}
jovenesAdultos();

console.log ("")
console.log("*** --- cuentas cuyas edades sean mayor o igual a 30 --- ***")
console.log ("")

function adultos () {
    for (let i = 0; i < arrayCuentas.length; i++){
    if (arrayCuentas[i].edadTitular >= 30) {
        console.log(arrayCuentas[i].titular);
    }}
}
adultos();

console.log ("")
console.log("*** --- cuentas cuyas edades sean menor o igual a 30 --- ***")
console.log ("")

function jovenesAdultos1 () {
    for (let i = 0; i < arrayCuentas.length; i++){
    if (arrayCuentas[i].edadTitular <= 30) {
        console.log(arrayCuentas[i].titular);
    }}
}
jovenesAdultos1();

console.log ("")
console.log("*** --- el titular de con la cuenta más joven --- ***")
console.log ("")

function cuentaMenorEdadTitular() {
    let cuentaMenorEdad = arrayCuentas[0]; // Suponemos que el primer elemento tiene la menor edad inicialmente
  
    for (let i = 1; i < arrayCuentas.length; i++) {
      if (arrayCuentas[i].edadTitular < cuentaMenorEdad.edadTitular) {
        cuentaMenorEdad = arrayCuentas[i];
      }
    }
  
    return cuentaMenorEdad.titular;
  }
  
  const cuentaMenorEdad = cuentaMenorEdadTitular();
  console.log(cuentaMenorEdad)

console.log ("")
console.log("*** --- promedio de las edades de los clientes --- ***")
console.log ("")

function promedioEdadesClientes() {
    let suma = 0;
    for (let i = 0; i < arrayCuentas.length; i++) {
      suma += arrayCuentas[i].edadTitular;
    }
    let promedio = suma / arrayCuentas.length;
    console.log(promedio);
  }
  
promedioEdadesClientes();
