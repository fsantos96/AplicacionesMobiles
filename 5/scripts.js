function aprobo(arrayNotas) {
    return arrayNotas.every(n => n >= 4);
}

console.log(aprobo([1, 7, 8, 5]));