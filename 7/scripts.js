function hayAlgunNegativo(arrayNum) {
    return arrayNum.some(n => n < 0);
}

hayAlgunNegativo([2,-3,9]);