//Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

function invertir(arreglo) {
    let nuevoArr = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
      nuevoArr.push(arreglo[i]);
    }
    return nuevoArr;
  }

  

  let arreglo = [1, 2, 3, 4, 5];
  let nuevoArreglo = invertir(arreglo);
  console.log("Arreglo invertido:", nuevoArreglo);
  