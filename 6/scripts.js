function aprobo(arrayNotas) {
    return arrayNotas.every(n => n >= 4);
}

function quienesAprobaron(arrayNotasPorAlumno) {
    return arrayNotasPorAlumno.filter(alum => aprobo(alum));
}

console.log(quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]));