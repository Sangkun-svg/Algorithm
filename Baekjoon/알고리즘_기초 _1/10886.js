// 10886번
// 덱

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const length = input.shift();
const deque = [];
const result = [];

for (let i = 0; i < length; i++) {
  const [command, value] = input[i].split(" ");
  switch (command) {
    case "push_front":
      deque.unshift(value); // 다른 방식
      break;
    case "push_back":
      deque.push(value);
      break;
    case "pop_front":
      result.push(deque.length === 0 ? -1 : deque.shift());
      break;
    case "pop_back":
      result.push(deque.length === 0 ? -1 : deque.pop());
      break;
    case "size":
      result.push(deque.length);
      break;
    case "empty":
      result.push(deque.length === 0 ? 1 : 0);
      break;
    case "front":
      result.push(deque.length === 0 ? -1 : deque[0]);
      break;
    case "back":
      result.push(deque.length === 0 ? -1 : deque.at(-1));
      break;
  }
}

console.log(result.join("\n"));
