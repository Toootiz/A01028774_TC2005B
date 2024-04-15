//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

function quitaDuplicados(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        //El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
        if (newArr.indexOf(arr[i]) === -1){ 
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

quitaDuplicados([2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9]) // [2,3,4,5,6,7,8,9]
quitaDuplicados([1, 0, 1, 1, 0, 0]) // [1, 0]
quitaDuplicados([1, 2, 3, 4, 5, 6, 7, 8, 9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]