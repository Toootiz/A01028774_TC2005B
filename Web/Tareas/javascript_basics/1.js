//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite.


function primerquenoserepite(s) {
    let charCount = { };
    
    for (let i=0;i<s.length;i++){
        if (!charCount[s[i]]){
            charCount [s[i]] = 1;
        }else{
           charCount[s[i]] += 1;  
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
