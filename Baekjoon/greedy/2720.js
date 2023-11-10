const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const charges = [25, 10, 5, 1];
input.shift();
const result = [];
input.map((el) => {
  const line = [];
  let lasted = el;
  for (charge of charges) {
    line.push(parseInt(lasted / charge));
    lasted = lasted % charge;
  }
  result.push(line.join(" "));
});
console.log(result.join("\n"));
