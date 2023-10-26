const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const result = [];
let position = 0;

for (el of input) {
  if (typeof el !== "string") continue;
  if (el[0] === "L") {
    if (position === 0) {
      continue;
    }
    position = position - 1;
    continue;
  }
  if (el[0] === "D") {
    if (position === result.length) {
      continue;
    }
    position = position + 1;
    continue;
  }
  if (el[0] === "B") {
    if (position === 0) {
      continue;
    }
    result.splice(position - 1, 1);
    position = position - 1;
    continue;
  }
  if (el[0] === "P") {
    result.splice(position, 0, el.split(" ").at(-1));
    position = position + 1;
  } else {
    result.splice(position, 0, ...el.split(""));
    position = position + el.length;
  }
}
console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");
const lStack = input2[0].split("");
const rStack = [];
for (el of input2) {
  const [command, value] = el.split(" ");
  if (command === "L" && lStack.length) rStack.push(lStack.pop());
  if (command === "D" && rStack.length) lStack.push(rStack.pop());
  if (command === "B" && lStack.length) lStack.pop();
  if (command === "P") lStack.push(value);
}
console.log([...lStack, ...rStack.reverse()].join(""));
