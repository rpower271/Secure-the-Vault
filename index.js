let code1;

code1 = 7 + 3;

let code2 = 70 / 2 - 5;

let code3 = (25 % 9) + (15 % 8) + 25;

let message = "the vault has been secured. The combination is:";

let codeA = code1 + "-" + code2 + "-" + code3;

let codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA);
console.log(message, codeB);
