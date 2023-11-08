// 그리드

const fs = require("fs");
const [length, value] = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = value.split(" ").map(Number);
const sortedInput = input.sort((a, b) => a - b);
let result = 0;

for (let i = 0; i < length; i++) {
  let sum = 0;
  for (let j = 0; j <= i; j++) {
    sum = sum + sortedInput[j];
  }
  result = result + sum;
}
console.log(result);
