//Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

function factoriza(num) {
    let factoriza = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factoriza.push(i);
        }
    }
    return factors;
}

console.log(factoriza(28)); // [1, 2, 4, 7, 14, 28]