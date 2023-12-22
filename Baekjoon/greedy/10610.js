const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
if (!input.includes("0")) {
  // 10의 배수인지 체크
  console.log(-1);
} else if (
  // 3의 배수인지 체크, 각각의 수 들을 모두 더한뒤 3으로 나눠지면 3의 배수이다
  input
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0) %
    3 !==
  0
) {
  console.log(-1);
} else {
  console.log(
    input
      .split("")
      .map(Number)
      .sort((a, b) => b - a)
      .join("")
  );
}
