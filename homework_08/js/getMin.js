function getMin () {
	var i;
    var min = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(getMin (3, 4, 5, -1));