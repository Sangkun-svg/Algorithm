const inputData = "567"; // 02984
const input = inputData.split("").map(Number);
let result = input.shift();
for (let i = 0; i < input.length; i++) {
  if (result < 2) result = result + input[i];
  else result = result * input[i];
}
console.log(result);
