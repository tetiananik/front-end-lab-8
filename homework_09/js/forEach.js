function forEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

forEach( [3, 5, 2], function(a) { 
console.log("Task 1",a);
} ) 
