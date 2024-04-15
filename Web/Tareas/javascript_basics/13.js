//Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

function cadenaFrecuente(arr) {
    let cadena = "";
    let max = 0;
    let obj = {};
    arr.map(str => {
        if (obj[str]) {
            obj[str]++;
        } else {
            obj[str] = 1;
        }
    });

    for (let str in obj) {
        if (obj[str] > max) {
            cadena = str;
            max = obj[str];
        }
    }

    return cadena;
}

console.log(cadenaFrecuente(["hola", "hola", "hola", "mundo"]));//"hola"
console.log(cadenaFrecuente(["como", "estas", "hoy", "hoy"]));//"hoy"
console.log(cadenaFrecuente(["buenas", "tardes", "buenas"]));//"buenas"