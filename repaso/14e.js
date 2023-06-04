

function Infierno (edad, estatura){

    if (edad >= 7 && estatura >=1.50) return console.log ("puede entrar cumple con el pedido")
    if (edad < 7 && estatura >= 1.50) return console.log ("no puede entrar porque no cumple con la edad")
    if (edad >= 7 && estatura < 1.50) return console.log ("no puede entrar porque no cumple con la estatura")
}

Infierno (10, 1.49)