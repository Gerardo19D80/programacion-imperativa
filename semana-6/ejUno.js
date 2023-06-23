/*

En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

*/

let likes = [20, 10, 90, 50, 60, 40, 30, 70, 80, 150, 120, 110, 140, 130, 100]

for(let i= 0; i < likes.length; i++) {
    //console.log( "pasada n: " + i);

    for (let j = 0; j < likes.length -1; j++) {
        //console.log (" recorriendo array index: " + j)
        if (likes[j]> likes[j+1]) {
            let auxiliar = likes[j];
            likes[j]= likes[j + 1];
            likes[j + 1] =auxiliar;
    }
    }
}

console.log(likes)
console.log("el que menos likes tuvo: ", likes[0]);
console.log("el que mas likes tuvo: ", likes[14]);
console.log("el segundo pusto: ", likes[13]);