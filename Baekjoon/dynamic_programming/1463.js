// 1463
// 동적 프로그래밍

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();
// const input = Number(inputData);
let input = 10;
let cnt = 0;

while (true) {
  if ((input - 1) % 3 === 0) {
    input = input - 1;
    cnt++;
  } else if (input % 3 === 0) {
    input = input / 3;
    cnt++;
  } else if (input % 2 === 0) {
    input = input / 2;
    cnt++;
  } else {
    input = input - 1;
    cnt++;
  }
  if (input === 1) break;
}

console.log(cnt);

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
