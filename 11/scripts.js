class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarme() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}

var persona = new Persona("Federico", 21);
console.log(persona.presentarme());