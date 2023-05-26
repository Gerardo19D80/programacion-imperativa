
for (let num = 11; num <= 50; num++) {
    if (esPrimo(num)) console.log(num);
}

function esPrimo(valor) { //50
    let i = --valor;
    let resultado = true;
    while (i > 1) {
        if (valor % i == 0) resultado = false;
        i--; 
    }
    return resultado;
}

