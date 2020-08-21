class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarme() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }

    estudiando() {
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor) {
        this.profesor = profesor
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
        if(estudiantes) {
            estudiantes.forEach(e => e.setProfesor(nombre));
            this.estudiantes = estudiantes;
        } else {
            this.estudiantes = [];
        }
    }

    enseñando() {
       this.estudiantes.forEach(e => console.log(e.nombre));
    }

    addEstudiante(estudiante) {
        estudiante.setProfesor(this.nombre);
        this.estudiantes.push(estudiante);
    }
}

var arrayAlumnos = [
    new Estudiante("Federico", 23),
    new Estudiante("Nestor", 30)
];

var profesor = new Profesor("Alexis", 35, arrayAlumnos);
console.log(profesor.presentarme());
profesor.enseñando();

profesor.addEstudiante(new Estudiante("Micaela", 22));

console.log(profesor.enseñando());