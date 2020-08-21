function aprobo(arrayNotas) {
    return arrayNotas.every(n => n >= 4);
}

aprobo([1, 7, 8, 5]);