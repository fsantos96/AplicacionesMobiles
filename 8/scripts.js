function cuantosCumplen(callbackCondicion, arrayNums) {
    return arrayNums.filter(n => callbackCondicion(n)).length;
}

function esPar(num) {
    return num % 2 == 0;
}

console.log(cuantosCumplen(esPar,[7,9,25,42]));