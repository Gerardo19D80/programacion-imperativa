/*

Calculadora - Nivel I:

1. Crear un archivo calculadora.js que contendrá las distintas operaciones a
realizar de nuestra calculadora. LISTO

2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
suma de los mismos. LISTO

3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo. LISTO

4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación. LISTO

5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo. LISTO

*/

/*function suma (a,b) {
    return a + b;
}
console.log ("El resultado de la suma es: ", suma (5, 5));

function resta (a,b) {
    return a - b;
}
console.log ("El resultado de la resta es: ", resta (5, 5));

function multiplica (a,b) {
    return a * b;
}
console.log ("El resultado de la multiplicacion es: ", multiplica (5, 5));

function division (a,b) {
    return a / b;
}
console.log ("El resultado de la division es: ", division (5, 5));
*/

console.log("-------------- Testeo de Operaciones / Calculadora --------------");


/* NIVEL II

Te recomendamos usar la función prompt() para pedirle al usuario que ingrese los números con los que
posteriormente ejecutaremos las funciones de nuestra calculadora. Recordá guardar esos datos del usuario en diferentes variables. LISTO

1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con
anterioridad— creá un console.log en el cual vas a poner un string para indicar
que debajo de él comenzarás a probar las funciones, algo así como un “separador de código”. 
Por ejemplo:
console.log(“-------------- Testeo de Operaciones / Calculadora --------------”) LISTO

2. Ejecutar la función que permite sumar y la función que permite restar pasando
como argumentos dos números cualesquiera. Mostrar en consola los
resultados. LISTO

3. Ejecutar la función que permite multiplicar pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado. LISTO

4. Ejecutar la función que permite dividir pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado. LISTO

5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.

En el punto 5, se nos requiere ejecutar la función dividir, pero si pasamos el cero
como divisor, nos arroja un error. No te preocupes. La idea es familiarizarte con que,
durante toda tu carrera como programador —y durante tu proceso formativo—, vas a 
encontrarte con errores. El objetivo es tratar de aprender a lidiar con esa frustración
de una manera lo más productiva posible. ¡No te desanimes!*/

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = prompt("Ingrese su numero: ");
console.log(`El primer numero ingresado para realizar la operacion es: ${numero1}`);

let numero2 = prompt("Ingrese su numero: ");
console.log(`El segundo numero ingresado para realizar la operacion es: ${numero2}`);

let numero3 = prompt("Ingrese su numero: ");
console.log(`El segundo numero ingresado para realizar la operacion es: ${numero3}`);

let operacion = prompt("Ingrese la operacion a realizar (suma, resta, multiplicacion, division, cuadrado, promedio): ");

function suma(numero1, numero2) {
  return parseInt(numero1) + parseInt(numero2);
}

function resta(numero1, numero2) {
  return parseInt(numero1) - parseInt(numero2);
}

function multiplicacion(numero1, numero2) {
  return parseInt(numero1) * parseInt(numero2);
}

function division(numero1, numero2) {
    return parseInt(numero1) / parseInt(numero2);
  }

function cuadrado(numero1) {
    return parseInt(numero1) * parseInt(numero1);
  }

function promedio(numero1, numero2, numero3) {
    return (parseInt(numero1) + parseInt(numero2) + parseInt(numero3))/3;
  }

function porcentaje(numero1, numero2) {
    return parseInt(numero2) * parseInt(numero1);
  }


if (operacion === "suma") {
  console.log("El resultado de la suma es: ", suma(numero1, numero2));
} else if (operacion === "resta") {
  console.log("El resultado de la resta es: ", resta(numero1, numero2));
} else if (operacion === "multiplicacion") {
  console.log("El resultado de la multiplicacion es: ", multiplicacion(numero1, numero2));
} else if (operacion === "division") {
    console.log("El resultado de la division es: ", division(numero1, numero2));
} else if (operacion === "cuadrado") {
    console.log("El resultado de la cuadratica es: ", cuadrado(numero1));
  } else if (operacion === "promedio") {
    console.log("El resultado del promedio es: ", promedio(numero1,numero2, numero3));

} else {
  console.log("Operación inválida");
}


/* 

NIVEL III

1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
número como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero(). LISTO

2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
de 3 números, que serán ingresados por parámetro.
Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora. LISTO

3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
creadas de nuestra calculadora.

4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
retornar el porcentaje del primero con respecto al segundo.
Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.
Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
200.

*/

//PARA VER DESPUES

/*
let num1 = 100;
let num2 = 10;

function division(num1, num2) {
  return num1 / num2;
}

function generadorDePorcentaje (num1, num2){
  let division = dividir (num1,num2);
  return multiplicar (division, 100);
}

let resultadoGeneradorPorcentaje = generadorDePorcentaje (num1, num2);
console.log (num1, "es el ", resultadoGeneradorPorcentaje, "% de ", num2);
*/
