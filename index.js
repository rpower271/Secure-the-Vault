var code1;

code1 = 7 + 3;

var code2 = 70 / 2 - 5;

var code3 = (25 % 9) + (15 % 8) + 25;

var message = "the vault has been secured. The combination is:";

var codeA = code1 + "-" + code2 + "-" + code3;

var codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA);
console.log(message, codeB);
