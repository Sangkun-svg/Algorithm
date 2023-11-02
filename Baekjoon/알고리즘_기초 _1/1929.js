// 1929
// 소수 찾기

const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));
const result = [];
for (let i = num1; i <= num2; i++) {
  let isPrime = true;
  if (i === 1) {
    result.push(false);
    continue;
  }
  for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    result.push(i);
  }
}
console.log(result.join("\n"));
