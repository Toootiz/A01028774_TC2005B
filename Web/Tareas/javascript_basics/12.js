//Escribe una función que tome una lista de números y devuelva la mediana y la moda.

function medianaModa(arr) {
    let mediana = 0;
    let moda = 0;
    let max = 0;
    let newArr = arr.sort((a, b) => a - b);
    let mitad = parseInt(newArr.length / 2);

    if (newArr.length % 2 === 0) {
        mediana = (newArr[mitad - 1] + newArr[mitad]) / 2;
    } else {
        mediana = newArr[mitad];
    }

    let obj = {};
    newArr.map(num => {
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    });

    for (let num in obj) {
        if (obj[num] > max) {
            moda = num;
            max = obj[num];
        }
    }

    console.log(`La mediana es: ${mediana}`);
    console.log(`La moda es: ${moda}`);
}

//Prueba de la función
const arr = [4,5,1,2,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
medianaModa(arr);
//La mediana es: 5
//La moda es: 5
