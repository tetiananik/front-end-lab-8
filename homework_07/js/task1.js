var Num = prompt("Input");
var block = "[~]";
Num = Number(Num);
if ( Num <= 0 || Num>20) {
	console.error("Incorrect!");
}

for (var i = 1; i <= Num ; i++) {
	var str = "";
	for (var j = 1; j <= Num - i; j++) {
		str += "   ";
	}
	for (var k = 1; k <= i; k++) {
		str += block;
	}
	for (var z = 1; z <= i - 1; z++) {
		str += block;
	}
	str += "\n";
	console.log(str);
}
