// 1978
// 소수 판별

// 모든 수로 나누기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");
const leng = inputData.shift();
const input = inputData[0].split(" ").map((el) => parseInt(el));
const result = [];
for (let i = 0; i < leng; i++) {
  if (input[i] === 1 || input[i] === 0) {
    result.push(true);
    continue;
  }
  for (let j = 2; j < input[i]; j++) {
    if (input[i] % j === 0) {
      result.push(true);
      break;
    }
  }
}
console.log(leng - result.length);

// 제곱근사용하여 빠르게 풀기
for (let i = 0; i < leng; i++) {
  if (input[i] === 1) {
    continue;
  }
  let isPrime = true;
  const sqrt = Math.floor(Math.sqrt(input[i]));
  for (let j = 2; j <= sqrt; j++) {
    if (input[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    result.push(input[i]);
  }
}
console.log(result.length);
