/*
Arrays

1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
*/

function sumaArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

function promedioArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}

function mayusculasArray(array) {
    return array.map(element => element.toUpperCase());
}

function paresArray(array) {
    return array.filter(element => element % 2 === 0);
}

console.log(sumaArray([1, 2, 3, 4, 5]));
console.log(promedioArray([1, 2, 3, 4, 5]));
console.log(mayusculasArray(["hola", "mundo"]));
