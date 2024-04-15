//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function shortestString(arr) {
    let shortest = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest) {
            shortest = arr[i].length;
        }
    }
    return shortest;
}
console.log(shortestString(['hello', 'world'])); // 5</span>