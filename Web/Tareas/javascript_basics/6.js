//Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function hackerSpeak(str) {

	let newStr = ""

	for (let i = 0; i < str.length; i++){
		if(str[i]=="a"){
			newStr += "4"
		} else if (str[i]== "e"){
			newStr += "3"
		} else if (str[i]== "i"){
			newStr += "1"
		} else if (str[i]== "o"){
			newStr += "0"
        } else if (str[i]== "s"){
            newStr += "5"
		} else{
			newStr += str[i]
		}
	}
	console.log(newStr)
}

console.log(hackerSpeak('Javascript es divertido')); // J4v45c1pt 35 d1v3rt1d0
console.log(hackerSpeak('Hola mundo')); // H0l4 mund0
console.log(hackerSpeak('Minecraft es un buen juego')); // S0y h4ck3r
