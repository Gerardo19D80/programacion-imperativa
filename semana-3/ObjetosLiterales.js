console.log( "*--- CADENA DE ARRAYS / ARRAYS COMO OBJETOS ---*" )

let coleccion = [
    {   
        tituloOriginal: "The Fast and the Furious",
        tituloHispanoamerica: "Rápido y furioso",
        estreno: 2001,
        genero: ["accion"],
        facturacion: 15000000,
        sinopsis: "La saga se inicia con The Fast and the Furious (2001), con un joven oficial de policía Brian O'Conner (Paul Walker) con la ayuda del FBI, entra en el mundo del tunning para desenmascarar las carreras ilegales de Dominic Toretto (Vin Diesel)"
    },

    {
        tituloOriginal: "2 Fast 2 Furious",
        tituloHispanoamerica: "Más rápido, más furioso",
        estreno: 2003,
        genero: ["accion", "comedia"],
        facturacion: 25000000,
        sinopsis: "Al dejar escapar a Toretto, Brian O'Conner se muda a Miami, donde luego, es capturado por la policía, la cual borrará sus antecedentes a cambio de encarcelar a Carter Verone (Cole Hauser), con la ayuda de su amigo de la infancia Roman Rome Pearce (Tyrese Gibson)."
    },

    {
        tituloOriginal: "The Fast and the Furious: Tokyo Drift",
        tituloHispanoamerica: "Rápido y furioso: Reto Tokio",
        estreno: 2006,
        genero: ["accion"],
        facturacion: 10000000,
        sinopsis: "Cuenta la historia de Sean Boswell (Lucas Black) que para que no lo metan en la cárcel se muda con su padre a Tokio donde conoce a Han Seoul Oh (Sung Kang), el exmiembro de la banda de Toretto y parte de su familia, y a Twinkie (Bow Wow), y se enamora de Neela (Nathalie Kelley). Hay una gran rivalidad con un sobrino de los Yakuza, Takashi («DK»: «Drift King») (Brian Tee), el cual se enfurece con Han al creerlo un traidor que según «DK» les estaba robando y acaba corriendo una carrera con Sean para saber quien se va de la ciudad, la cual gana Sean."
    },

    {
        tituloOriginal: "Fast & Furious",
        tituloHispanoamerica: "Rápidos y furiosos 4",
        estreno: 2009,
        genero: ["accion", "comedia", "adrenalina"],
        facturacion: 35000000,
        sinopsis: "Toretto había huido a República Dominicana donde corría y robaba junto a Han (Sung Kang), Rico Santos (Don Omar), Tego Leo (Tego Calderón) y a su novia, Leticia «Letty» Ortiz (Michelle Rodríguez). Luego Toretto huye a Panamá (...)"
    }

]

console.log( "*--- OBJETO LITERAL ---*" )

let cineCorrientes = {
    
    //propiedad: valor,
    nombre: coleccion[0].tituloHispanoamerica,
    mesReEstreno: "junio",
    sinopsis: coleccion[0].sinopsis,

// LOS OBJETOS TIENEN METODOS QUE NO SON OTRA COSA QUE FUNCIONES DENTRO DEL OBJETO:    
    
//metodo: function () {
        //return console.log()
    //}  

}

console.log(cineCorrientes);