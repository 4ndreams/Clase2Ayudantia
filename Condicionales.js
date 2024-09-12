/*
Condicionales

1. Imprimir en consola el número mayor de los tres.
2. Imprimir en consola el número menor de los tres.
3. Imprimir en consola si el numero1 es par o impar.
4. Imprimir en consola si el numero2 es par o impar.
5. Imprimir en consola si el numero3 es par o impar.
6. Imprimir en consola si el numero1 es múltiplo de 5.
7. Imprimir en consola si el numero2 es múltiplo de 5.
8. Imprimir en consola si el numero3 es múltiplo de 5.
*/

const numero1 = 10;
const numero2 = 8;
const numero3 = 25;

console.log("El número mayor es: ", Math.max(numero1, numero2, numero3));  
console.log("El número menor es: ", Math.min(numero1, numero2, numero3));
console.log("El número1 es: ", numero1 % 2 === 0 ? "par" : "impar");
console.log("El número2 es: ", numero2 % 2 === 0 ? "par" : "impar");
console.log("El número3 es: ", numero3 % 2 === 0 ? "par" : "impar");    
console.log("El número1 es múltiplo de 5: ", numero1 % 5 === 0);
console.log("El número2 es múltiplo de 5: ", numero2 % 5 === 0);
console.log("El número3 es múltiplo de 5: ", numero3 % 5 === 0);