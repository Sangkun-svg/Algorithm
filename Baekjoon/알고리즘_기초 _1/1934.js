// 1934
// 최소공배수

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const length = input.shift();
const result = [];
const GreatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  return GreatestCommonDivisor(b, a % b);
};
const LeastCommonMultiple = (a, b, gcd) => {
  return (a / gcd) * (b / gcd) * gcd;
};
for (let i = 0; i < length; i++) {
  const [a, b] = input[i].split(" ").map((el) => parseInt(el));
  if (a === 1 || b === 1) {
    result.push(a > b ? a : b);
    continue;
  }
  const gcd = GreatestCommonDivisor(a, b);
  result.push(LeastCommonMultiple(a, b, gcd));
}
console.log(result.join("\n"));
