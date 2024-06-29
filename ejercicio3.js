/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

let numeros = [1, 2, 3, 4];

let suma = 0;
let producto = 1;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    producto *= numeros[i];
}

console.log('La suma es:', suma);
console.log('El producto es:', producto);