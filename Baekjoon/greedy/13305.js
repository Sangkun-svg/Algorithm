const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");
const length = inputData.shift();
const [distance, price] = inputData.map((el) => {
  return el.split(" ").map((v) => BigInt(v));
});
let currentPrice = price[0];
let result = 0;
for (let i = 0; i < length - 1; i++) {
  result += currentPrice * distance[i];
  if (currentPrice > price[i + 1]) {
    currentPrice = price[i + 1];
  }
}
console.log(result);
