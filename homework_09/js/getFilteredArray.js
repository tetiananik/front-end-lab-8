function forEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}
function getFilteredArray(arr, func) {
	var result = [];
	forEach(arr, function(el){
		if (func(el)) {
			result.push(el);
		}
	})
	return result;
}
function predicateFunction(num) { 
return num > 3;
} // returns boolean value
console.log("Task 3",getFilteredArray([1, 7, 20], predicateFunction)); // -> [7, 20]
