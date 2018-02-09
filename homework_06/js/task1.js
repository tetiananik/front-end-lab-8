var a = prompt("Side A");
var b = prompt("Side B");
var c = prompt("Side C");
a = Number(a);
b = Number(b);
c = Number(c);
var p = (a + b + c)/2;
var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
if(isNaN(s/s)|| (a<=0)|| (b<=0)|| (c<=0)) {
	console.log("Incorrect data");
} else {
var type;
if (a ==  b || a ==  c || b ==  c)   type = "isosceles";
if (a == b && b == c && a == c) type = "equilateral";
if (a != b && b != c && a != c) type = "scalene";
if ((Math.pow(a, 2) == (Math.pow(b, 2) + Math.pow(c, 2))) || (Math.pow(b, 2) == (Math.pow(a, 2) + 
	+ Math.pow(c, 2)))|| (Math.pow(c, 2) == (Math.pow(a, 2) + 
	+ Math.pow(b, 2)))) type = "right";
console.log("Type of triangle is "+ type +" triangle and square is "+ (Math.floor(s * 100) / 100).toFixed(2));
}