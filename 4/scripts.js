function algunoEsPar(arrayNums) {
    return arrayNums.some(n => n % 2 == 0);
}

console.log(algunoEsPar([1, 13, 11, 2]));