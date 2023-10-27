// 17413번
// 문자열

const readline = require("readline");

const solution = (line) => {
  const regExp = /<[a-z\s]+>|[a-z0-9]+/g;
  let result = line;
  result = line.replace(regExp, (word) => {
    if (word.startsWith("<")) {
      return word;
    } else {
      return word.split("").reverse().join("");
    }
  });
  return result;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
