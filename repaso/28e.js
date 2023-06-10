
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


const menoresDe18 = edades.filter((edad) => edad < 18);
console.log(menoresDe18); // [11, 12, 15, 10, 5]


const edades1 = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const menoresDe = edades1.filter(function(edad) {
  return edad < 18;
});
console.log(menoresDe18); // [11, 12, 15, 10, 5]