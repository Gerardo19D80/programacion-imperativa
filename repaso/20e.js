function ope(a, b, operacion){

    switch(operacion){
        case 'suma':
            console.log( a+b);
            break;
        case 'resta':
            console.log (a-b);
            break;
        case 'multiplicacion':
            console.log (a*b);
            break;
        case 'division':
            console.log (a/b);
            break;
        default:
            return "error";
            break;
    }
    }
    ope(10, 2,'resta');