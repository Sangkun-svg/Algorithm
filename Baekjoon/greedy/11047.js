const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [length, value] = input.shift().split(" ").map(Number);
let count = 0;
for (let i = length - 1; i >= 0; i--) {
  if (input[i] > value) continue;

  count = count + parseInt(value / input[i]);
  value = value % input[i];
}
console.log(count);
