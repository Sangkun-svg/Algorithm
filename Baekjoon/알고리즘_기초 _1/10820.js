// 10820번
// 문자열

const fs = require("fs");
let lines = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = [];
for (let i = 0; i < lines.length; i++) {
  const sentence = lines[i];
  if (sentence.length === 0) continue;
  // 예외케이스가 지켜지지 않은 경우인가 ?
  // 첫째 줄부터 N번째 줄까지 문자열이 주어진다. (1 ≤ N ≤ 100) 문자열의 길이는 100을 넘지 않는다.
  // 문자열은 무조건 1 이상인데 문자열이 0 인 경우를 고려해줘야 통과한다..
  let lowercase = 0;
  let uppercase = 0;
  let whiteSpace = 0;
  let nums = 0;
  for (let j = 0; j < sentence.length; j++) {
    const el = sentence[j];
    if (el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123) lowercase++;
    if (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91) uppercase++;
    if (el.charCodeAt(0) === 32) whiteSpace++;
    if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) nums++;
  }
  result.push(`${lowercase} ${uppercase} ${nums} ${whiteSpace}`);
}
console.log(result.join("\n"));
