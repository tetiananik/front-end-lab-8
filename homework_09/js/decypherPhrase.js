function decypherPhrase (map, str) {
	var obj = {};
	for (var key in map) {
		obj[map[key]] = key;
	}
	return cypherPhrase(obj, str);
}
var charactersMap = {a: "o", c: "d", t: "g"}
console.log("Task 6",decypherPhrase(charactersMap, "kiggy dog")); // -> “kitty cat”

