//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function primeraletra(str) {
    let palabra = str.split(' ');
    let newStr = '';
    for (let i = 0; i < palabra.length; i++) {
        newStr += palabra[i][0].toUpperCase() + palabra[i].slice(1) + ' ';
    }
    return newStr.trim();
}

let str = 'hola mundo';
console.log(primeraletra(str));
