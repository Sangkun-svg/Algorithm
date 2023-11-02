// 10430

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = inputData.map((el) => parseInt(el));
console.log((input[0] + input[1]) % input[2]);
console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
