//Escribe una función que revise si una cadena de texto es un palíndromo o no.

function palindromo(str) {
    let newStr = str.split("").reverse().join("");
    if (str === newStr) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo("oso")); // true
console.log(palindromo("reconocer")); // true
console.log(palindromo("hola")); // false