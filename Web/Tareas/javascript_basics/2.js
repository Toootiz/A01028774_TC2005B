//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

function bubbleSort(arr) {
    let len = arr.length;
    for (let i=0; i<len; i++) {
        for (let j=0; j<len-i-1; j++) {
            if (arr[j] > arr[j+1]) {  
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];  
            } 
        }
    }
}

const numbers = [5,2,8,1,3,4,6,7];
const numbers2 = [5,2,8,1,3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20];
const numbers3 = [5,2,8,1,3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

bubbleSort(numbers);
bubbleSort(numbers2);
bubbleSort(numbers3);


console.log(numbers);
console.log(numbers2);
console.log(numbers3);