//school.programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
https: function solution(n) {
  if (n < 1) return n;
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result.reduce((a, b) => a + b);
}
