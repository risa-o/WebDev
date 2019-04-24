(function(){
    "use strict";

    function isNumeric(input){
    	if (typeof input == 'number'){
    		return true;
    	}else{
    		return false;
    	}
    }
	console.log(isNumeric('banana'));

	function isNumeric2(input){
	 	if(isNaN(input)){
	 		return false;
	 	} else{
	 		return true;
	 	}
	 }
	console.log(isNumeric2(13))

	function isEqual(input1,input2){
		if (input1 == input2){
			return true;
		}else{
			return false;
		}
	}

	function isEqual2(input1,input2){
		return input1 == input2;
	}
	console.log(isEqual(5,"5"))
	console.log(isEqual2(5,5))

	function isIdentical(input1,input2){
		return input1 === input2;
	}
	console.log(isIdentical(5,5))

	function not(input){
		return !input
	}
	console.log(not(isIdentical(5,"5")))

	function isOdd(input){
		if (input % 2 != 0){
			return true;
		} else {
			return false;
		}
	}
	console.log(isOdd(5))

	function isEven(input){
		return input % 2 == 0;
	}
	console.log(isEven(4))

	function isPositive(input){
		return input > 0;
	}
	console.log(isPositive(8))

	function isNegative(input){
		return input < 0;
	}
	console.log(isNegative(-3))

	function identity(input){
		return input;
	}
	console.log(identity('testing'))

	function isFive(input){
		return input == 5;
	}
	function addFive(input){
		return input + 5;
	}
	function isMultipleOfFive(input){
		return input % 5 == 0;
	}

	function isThree(input){
		return input == 3;
	}

	function isMultipleofThree(input){
		return input % 3 == 0;
	}

	function isMultipleOfThreeAndFive(input){
		return (input % 3 == 0) && (input % 5 == 0);
	}

	function isMultipleOf(target,n){
		return input % n == 0;
	}

	function isTrue(boolean){
		
	}
})();