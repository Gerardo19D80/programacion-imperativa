// ***** CONCURSO STAND UP ******
console.log("*** ----- Concurso Stand UP ----- *** ")

let alicia = {
    voto1: 10,
    voto2: 80,
    voto3: 75,
};

let bob = {
    voto1:90,
    voto2: 20,
    voto3:25,
};


if (alicia.voto1 > bob.voto1) 
{return console.log("El ganador de la primera prueba con: ", alicia.voto1,  " votos es Alicia") 
} else {return console.log ("el ganador de la primera prueba con " + bob.voto1 + "votos es Bob") 
}