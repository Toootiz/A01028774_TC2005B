//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function primeraletra(str) {
    let palabra = str.split(' '); //El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
    let newStr = '';
    for (let i = 0; i < palabra.length; i++) {
        newStr += palabra[i][0].toUpperCase() + palabra[i].slice(1) + ' '; //El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada. El slice() método devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El fin es opcional y por defecto es el final del array.
    }
    return newStr.trim();
}

let str = 'hola mundo';
let str2 = 'como estas';
let str3 = 'ayuda no me gusta javascript';
console.log(primeraletra(str));
console.log(primeraletra(str2));
console.log(primeraletra(str3));
