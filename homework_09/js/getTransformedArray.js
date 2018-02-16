function forEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}
function getTransformedArray(arr, func) {
	var result = [];
	forEach(arr, function(el){
		result.push(func(el));
	})
	return result;
}
function increment(num) { 
return num + 1;
} // just returns incremented number
console.log("Task 2",getTransformedArray([1, 7, 20], increment)); 

