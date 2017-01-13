//Exercise 1
var name = "Mazie";
console.log('Hello ' + name);

//Exercise 2
var x = 1125;
var answer = x%2;
console.log(answer);

//Exercise 3
var a = true;
var b = false;
var c = true;
console.log(a || b || c);

//Exercise 4
var a = true;
var b = false;
var c = true;
console.log(a && b && c);

//Exercise 5
var answer1 = 10 - 3 * 5/4 + 202 % 3;
console.log(answer1);
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer2);

//Exercise 6
var str = String(12);
console.log(str);
var int = parseInt("113");
console.log(int);
var flo = parseFloat(1.12356);
console.log(flo);
var x = parseInt("Hello World");
console.log(x);

//Diving Deeper
var str1 = "I am a Brainstation student";
var find = /Brainstation/i;
var search = str1.search(find);
console.log(search);

var str2 = "I am a student";
var find = /Brainstation/i;
var search2 = str2.search(find);
console.log(search2)

var str1 = "I am a Brainstation student";
var replace = str1.replace(/Brainstation student/i, "Junior Developer");
console.log(replace);