//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function cadenaCorta(arr) {
    let masCorta = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < masCorta) {
            masCorta = arr[i].length;
        }
    }
    return masCorta;
}
console.log(cadenaCorta(['hola', 'mundo'])); // 4
console.log(cadenaCorta(['como', 'estas', 'hoy'])); // 3
console.log(cadenaCorta(['buenas', 'tardes'])); // 6
