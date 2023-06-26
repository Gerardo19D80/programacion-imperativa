/*

1. Algoritmos de iteración y toma de decisiones:

Enunciado: Escribe una función llamada "calificarEstudiantes" que reciba una matriz de objetos, donde cada objeto representa a un estudiante y tiene las propiedades "nombre" y "nota". La función debe iterar sobre la matriz y retornar un nuevo arreglo con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 70.

*/

let estudiantes = [
    {
        nombre: "Juan", 
        nota: 80
},

    {
        nombre: "Pedro", 
        nota: 20
},

    {
        nombre: "Gerardo", 
        nota: 50
},

    {      
        nombre: "Hernan", 
        nota: 100
}
  
]


function calificarEstudiantes(estudiantes) {
    var estudiantesAprobados = [];
    
    for (var i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].nota >= 70) {
        estudiantesAprobados.push(estudiantes[i].nombre); // o estudiantesAprobados.push(estudiantes[i])
      }
        // console.log(estudiantesAprobados);
    }
    
    console.log(estudiantesAprobados);
  }

  calificarEstudiantes(estudiantes)


