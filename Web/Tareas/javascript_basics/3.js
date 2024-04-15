//Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

function invertir(arreglo) {
    let nuevoArr = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
      nuevoArr.push(arreglo[i]);
    }
    return nuevoArr;
  }

  

  let arreglo = [1, 2, 3, 4, 5];
  let arreglo2 = [1, 2, 3, 4, 5, 6, 7 , 8];
  let arreglo3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let nuevoArreglo = invertir(arreglo);
  let nuevoArreglo2 = invertir(arreglo2);
  let nuevoArreglo3 = invertir(arreglo3);
  console.log("Arreglo invertido:", nuevoArreglo); //[5, 4, 3, 2, 1]
  console.log("Arreglo invertido:", nuevoArreglo2); //[8, 7, 6, 5, 4, 3, 2, 1]
  console.log("Arreglo invertido:", nuevoArreglo3); //[100, 90, 80, 70, 60, 50, 40, 30, 20, 1]
  