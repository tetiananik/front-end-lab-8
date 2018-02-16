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

function cypherPhrase(map, str) {
	var newStr = getTransformedArray(str.split(""), function(char){
		if (map[char]) {
			char = map[char];
		}
		return char;
	});
	return newStr.join("");
}

var charactersMap = {a: "o", c: "d", t: "g"}
console.log("Task 5",cypherPhrase(charactersMap, "kitty cat" )); // -> “kiggy dog”
