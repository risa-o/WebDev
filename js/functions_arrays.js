(function(){
    "use strict";

	var a = [] 
	var b = [5]
	var c = [6, 1]
	var d = [7, 5, 23]
	var e = false
	var f = true
	var g = "banana"
	var h = ""
	var i = " "
	var j = ["John", "Paul", "George", "Ringo"]
	var k = undefined
	var l = "Bob"
	var m = "Jane"
	var n = "jk"
	var o = "Q"
	//var p = { firstName: "Jane" :, lastName : "Janeway"}
	var q = NaN
	var r = alert
	var s = console.log
	var t = null
	var u = [[1,2], [3,4], [5,6]]
	var v = ["abc", 123]
	var w = 23
	var x = Infinity
	var y = " kiwi "
	var z = " mango"



	function isEmpty(input){
		if (input == "" || input == null){
			return true;
		} else if(input == undefined || input == true){
			return false;
		} else {
			return false;
		}
	};


	console.log(isEmpty(k))
})();