function contiene(numABuscar, arrayNum) {
    return arrayNum.some(n => n === numABuscar);
}

console.log(contiene(8, [7,8,9]));