/*
Funciones

1. Crea una función que reciba un string y retorne el string en mayúsculas.
2. Crea una función que reciba un string y retorne el string en minúsculas.
3. Crear una función que reciba como parámetro 2 números y los reste.
4. Crear una función que reciba como parámetro 2 números y los divida.
5. Crear una función que reciba como parámetro 2 números y los multiplique.
6. Crear una función que reciba un string y devuelva la longitud del string.
*/

function mayusculas(string) {
    return string.toUpperCase();
}

function minusculas(string) {
    return string.toLowerCase();
}

function resta(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function longitud(string) {
    return string.length;
}

console.log(mayusculas("hola"));
console.log(minusculas("HOLA"));
console.log(resta(10, 5));
console.log(division(10, 5));
console.log(multiplicacion(10, 5));
console.log(longitud("hola"));