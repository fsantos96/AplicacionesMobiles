function hayAlgunNegativo(arrayNum) {
    return arrayNum.some(n => n < 0);
}

console.log(hayAlgunNegativo([2,-3,9]));