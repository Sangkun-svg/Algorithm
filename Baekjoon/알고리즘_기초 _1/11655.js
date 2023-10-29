// 10820번
// 문자열
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const result = [];
for (el of input[0]) {
  if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
    result.push(el);
    continue;
  }
  if (el.charCodeAt(0) === 32) {
    result.push(" ");
    continue;
  }
  if (el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123) {
    if (el.charCodeAt(0) + 13 < 123) {
      result.push(String.fromCharCode(el.charCodeAt(0) + 13));
    } else {
      result.push(String.fromCharCode(el.charCodeAt(0) - 13));
    }
  }
  if (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91) {
    if (el.charCodeAt(0) + 13 < 91) {
      result.push(String.fromCharCode(el.charCodeAt(0) + 13));
    } else {
      result.push(String.fromCharCode(el.charCodeAt(0) - 13));
    }
  }
}
console.log(result.join(""));
