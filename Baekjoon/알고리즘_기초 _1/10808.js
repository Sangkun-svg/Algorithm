// 10808
// 문자열

const readline = require("readline");
const solution = (line) => {
  const result = new Array(26).fill(0);
  for (el of line) {
    const beforeValue = result[el.charCodeAt(0) - 97];
    result.splice(el.charCodeAt(0) - 97, 1, beforeValue + 1);
  }
  return result.join(" ");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
