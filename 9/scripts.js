function rechazar(callbackCondicion, arrayNums) {
    return arrayNums.filter(n => !callbackCondicion(n, 12));
}

function esMayor(num, numMayor) {
    return num > numMayor;
}

rechazar(esMayor,[7,9,87,42]);