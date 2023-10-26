// 9012번
// 문자열,스택

const array = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = [];
const length = array.shift();

for (let i = 0; i < length; i++) {
  let count = 0;
  for (s of array[i]) {
    if (s === "(") {
      count = count + 1;
    }
    if (s === ")") {
      count = count - 1;
    }
    if (count < 0) break;
  }
  // console.log(count)
  result.push(count === 0 ? "YES" : "NO");
}
console.log(result.join("\n"));
