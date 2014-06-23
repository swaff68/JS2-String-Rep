alert('Please enter a name of a fruit.');
var word = prompt("Fruit?");
alert("Great, you entered " + word + "!" 
	+ "\n There are " + word.length + " " + "characters in the word " + word + "!" 
	+ "\n The third character is " + word [2] 
	+ "\n The lower case of the word is " + word.toLowerCase()
	+ "\n The upper case of the word is " + word.toUpperCase()
	+ "\n I just love " + word + "s" + "!"
	+ "\n Subword: " + word.substr (1,word.length-1));
