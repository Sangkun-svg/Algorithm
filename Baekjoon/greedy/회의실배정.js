const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
input.shift();
const result = [input[0]];
input.forEach((el, idx) => {
  if (idx !== 0) {
    const currentDiff = el
      .split(" ")
      .map(Number)
      .reduce((a, b) => b - a);
    const prevDiff = input[idx - 1]
      .split(" ")
      .map(Number)
      .reduce((a, b) => b - a);
    if (
      currentDiff < prevDiff &&
      result[result.length - 1].split(" ").at(1) <= el.split(" ").at(0)
    ) {
      result.push(el);
    }
  }
});
console.log(result.length);
