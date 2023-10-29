// 10809
// 문자열

const readline = require("readline");

const solution = (input) => {
  const result = new Array(26).fill(-1);
  for (let idx = 0; idx < input.length; idx++) {
    if (result[input[idx].charCodeAt(0) - 97] === -1) {
      result.splice(input[idx].charCodeAt(0) - 97, 1, idx);
    }
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
