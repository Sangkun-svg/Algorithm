// 완전탐색 , 구현

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
let x,
  y = 1;
let result = 0;

if (y - 2 > 0 || y + 2 < 8) {
  result++;
  if (x - 2 > 0 || x + 2 < 8) {
    result++;
  }
}
if (x - 2 > 0 || x + 2 < 8) {
  result++;
  if (y - 2 > 0 || y + 2 < 8) {
    result++;
  }
}
console.log(result);
