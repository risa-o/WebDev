"use strict";

 // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.


// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random


// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.


(function (){
	var myNameIs = 'Risa';
	function sayHello(name){
		console.log(name + ' says Hello.');
	}
	sayHello(myNameIs);

	var random = Math.floor((Math.random()*100)+1);
	function isOdd(number){
		if (number % 2 == 0){
			return console.log(number +" is even");
		}else {
			return console.log(number +" is odd.");
		}
	}
	isOdd(random);

	function isOddtern(number){
		(number % 2 == 0) ? console.log(number + " is even.") : console.log(number + " is odd.")
	}
	isOddtern(random);

	function isPositive(number){
	return number > 0
	}

})();

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.





