//programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// refactor
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((el, idx) => el * (idx + 1));
}
