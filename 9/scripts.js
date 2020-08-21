function rechazar(callbackCondicion, arrayNums) {
    return arrayNums.filter(n => !callbackCondicion(n, 12));
}

function esMayor(num, numMayor) {
    return num > numMayor;
}

console.log(rechazar(esMayor,[7,9,87,42]));