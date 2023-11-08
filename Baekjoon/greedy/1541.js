const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const numbers = input.split("-").map((str) => {
  return str
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);
});
const answer = numbers[0] * 2 - numbers.reduce((s, v) => s + v, 0);
console.log(answer);
