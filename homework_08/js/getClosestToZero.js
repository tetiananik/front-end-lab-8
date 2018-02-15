function getClosestToZero() {
	var closest = Infinity;
	for (i = 0; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < closest) {
            closest = arguments[i];
        }
    }
    return closest;
}
console.log(getClosestToZero(3, -4, 2, -1));