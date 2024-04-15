//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite.


function primerquenoserepite(str) {
    let charCount = { };
    
    for (let i=0;i<str.length;i++){
        if (!charCount[str[i]]){
            charCount [str[i]] = 1;
        }else{
           charCount[str[i]] += 1;  
        }
    }
    
    for (let letra in charCount){
        if (charCount[letra] === 1){
            return letra;
        }
    }
}

console.log(primerquenoserepite("abacabad")); //c
console.log(primerquenoserepite("abacddbec")); //e
console.log(primerquenoserepite("aabbccddeff")); //e
