// 10828번
// 스택

const array = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];
const result = [];

for (let i = 1; i < array.length; i++) {
  const [command, value] = array[i].split(" ");
  switch (command) {
    case "push":
      stack.push(parseInt(value));
      break;
    case "pop":
      result.push(stack.length === 0 ? -1 : stack.pop());
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;
  }
}
console.log(result.join("\n"));
