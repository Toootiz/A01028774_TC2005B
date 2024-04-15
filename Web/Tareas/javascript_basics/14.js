//Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

function potenciaDeDos(num) {
    if (num === 1) {
        return true;
    }
    if (num % 2 !== 0) {
        return false;
    }
    return potenciaDeDos(num / 2);
}

console.log(potenciaDeDos(16)); //true
console.log(potenciaDeDos(32)); //true
console.log(potenciaDeDos(5)); //false