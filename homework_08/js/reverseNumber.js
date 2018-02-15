function reverseNumber(a) {
	if (a > 0) {
		a = a.toString();
	    return Number(a.split("").reverse().join(""));
	} else {
		a *= (-1);
		a = a.toString();
	    return Number(a.split("").reverse().join(""))*(-1);
	}
}
console.log(reverseNumber(123));