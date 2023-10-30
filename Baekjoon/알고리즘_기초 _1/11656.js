// 11656
// 문자열

const iter = input.length;
let result = [];
for (let i = 0; i < iter; i++) {
  result.push(input.join(""));
  input.shift();
}
console.log(result.sort().join("\n"));
