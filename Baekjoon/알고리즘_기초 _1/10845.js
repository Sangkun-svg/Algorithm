// 10845번
// 큐

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const queue = [];
const result = [];

for (let i = 1; i < input.length; i++) {
  const [command, value] = input[i].split(" ");
  if (command === "push") queue.push(value);
  if (command === "pop")
    queue.length === 0 ? result.push(-1) : result.push(queue.shift());
  if (command === "size") result.push(queue.length);
  if (command === "empty") result.push(queue.length === 0 ? 1 : 0);
  if (command === "front") result.push(queue.length === 0 ? -1 : queue[0]);
  if (command === "back") result.push(queue.length === 0 ? -1 : queue.at(-1));
}

console.log(result.join("\n"));
