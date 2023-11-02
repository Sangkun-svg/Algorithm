// 2609
// 최대공약수 최대공배수

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = inputData.map((el) => parseInt(el));

const GreatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  return GreatestCommonDivisor(b, a % b);
};

const LeastCommonMultiple = (a, b, gcd) => {
  return (a / gcd) * (b / gcd) * gcd;
};

console.log(GreatestCommonDivisor(input[0], input[1]));
console.log(
  LeastCommonMultiple(
    input[0],
    input[1],
    GreatestCommonDivisor(input[0], input[1])
  )
);
