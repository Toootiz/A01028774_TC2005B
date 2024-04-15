//Escribe una función que calcule el máximo común divisor de dos números.

function mcd(a, b) {
    if (b === 0) {
        return a;
    }
    return mcd(b, a % b);
}
console.log(mcd(12, 8)); // 4
console.log(mcd(15, 10)); // 5
console.log(mcd(9, 3)); // 3