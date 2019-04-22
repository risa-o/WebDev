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

	// function isNumeric2(input){
	// 	if(isNan(input)){
	// 		return true;
	// 	} else{
	// 		return false;
	// 	}
	// }
	// console.log(isNumeric2(13))

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
})();