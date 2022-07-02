function solution(n) {
  let answer = 0;
  n.toString()
    .split("")
    .map((el) => (answer += Number(el)));
  return answer;
}

// refactor

function solution2(n) {
  return n
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);
}
