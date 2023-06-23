let butacasCine = [
                    ['ocupado', 'libre','libre', 'libre'], // posicion 0 - elemento 1
                    ['libre','libre','libre','libre'], // posicion 1 - elemento 2
                    ['libre','libre','ocupado','ocupado'], // posicion 2 - elemento 3
                    ['ocupado','ocupado', 'ocupado','ocupado'], // posicion 3 - elemento 4
                    ['libre','libre','libre','libre'] // posicion 4 - elemento 5
];

console.table(butacasCine);

//let cantidadFilas = butacasCine.length;
//let cantidadColumnas = butacasCine[0].length;

let libres= false;
for (let i=0;i<butacasCine[1].length;i++)
{
if (butacas[1][i]=='libre')
libres= true;
}

