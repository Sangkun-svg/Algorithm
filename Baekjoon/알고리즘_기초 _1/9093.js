// 9093번
// 문자열

const array = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const result = [];

for (let i = 1; i < array.length; i++) {
  const sentence = array[i]
    .split(" ")
    .map((el) => el.split("").reverse().join(""));
  result.push(sentence.join(" "));
}
console.log(result.join("\n"));
