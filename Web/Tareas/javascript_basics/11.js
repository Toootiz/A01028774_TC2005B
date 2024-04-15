//Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

function ordenarLista(arr) {
    return arr.sort(); //El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.
}

console.log(ordenarLista(['vaca', 'araña', 'orangutan', 'pez'])); // ['araña', 'orangutan', 'pez', 'vaca']
