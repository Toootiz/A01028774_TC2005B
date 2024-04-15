//Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

function ordenarLista(arr) {
    return arr.sort().reverse();
}

const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lista2 = [20, 30, 40, 50, 60, 70, 80, 90, 100];
const lista3 = [13, 16, 19, 22, 24, 56];
console.log(ordenarLista(lista1)); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(ordenarLista(lista2)); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(ordenarLista(lista3)); // [9, 8, 7, 6, 5, 4, 3, 2, 1]