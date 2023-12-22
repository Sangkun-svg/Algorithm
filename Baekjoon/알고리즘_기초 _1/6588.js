// 6588
// 소수

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .filter((el) => el);
const result = [];
const findPair = (arr = [], target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [arr[left], arr[right]];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
};

for (let i = 0; i < input.length; i++) {
  const output = [];
  for (let j = 2; j <= input[i]; j++) {
    if (input[i] % j !== 0 && j % 2 !== 0) {
      output.push(j);
    }
  }
  const findPairList = findPair(output, input[i]);
  if (findPairList) {
    result.push(`${input[i]} = ${findPairList[0]} + ${findPairList[1]}`);
  } else {
    result.push("Goldbach's conjecture is wrong.");
  }
}

console.log(result.join("\n"));
