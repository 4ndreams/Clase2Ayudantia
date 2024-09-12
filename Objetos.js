/*
Objetos

1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
*/

var persona = {
    nombre: "Andrea",
    edad: 23,
    genero: "🦄"
}

console.log(persona);

for (const key in persona) {
    console.log(key, persona[key]);
    console.log(typeof persona[key]);
}

var caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 2,
    buenEstado: true
}

console.log(caja);

for (const key in caja) {
    console.log(key, caja[key]);
    console.log(typeof caja[key]);
}
