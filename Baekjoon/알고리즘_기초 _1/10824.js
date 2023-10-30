// 10824번

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const result = [];
for (let i = 0; i < input.length; i++) {
  if ((i + 1) % 2 === 0) {
    continue;
  }
  result.push("" + input[i] + input[i + 1]);
}
console.log(result.reduce((a, b) => Number(a) + Number(b)));
