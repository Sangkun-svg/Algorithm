const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();
const input = Number(inputData);
let result = 1000 - input;
let cnt = 0;
const changes = [500, 100, 50, 10, 5, 1];
for (let i = 0; i < changes.length; i++) {
  if (result !== 0) {
    cnt = cnt + parseInt(result / changes[i]);
    result = result % changes[i];
  }
}
console.log(cnt);
