// 너무 배열을 이요해서만 해결하려했다. 그래서 문제를 복잡하게 느끼고 코드가 중복된듯

function solution(s) {
  var answer = s.split("");
  return s.length % 2 === 0
    ? answer[parseInt(s.length / 2)] + answer[parseInt(s.length / 2) + 1]
    : answer[parseInt(s.length / 2)];
}

// refactor

function solution(s) {
  const average = parseInt(s.length / 2);
  return s.length % 2 === 0 ? s[average - 1] + s[average] : s[average];
}
