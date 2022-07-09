// https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

function solution(arr, divisor) {
  answer = [];
  arr
    .map((el) => {
      if (el % divisor === 0) {
        answer.push(el);
      }
    })
    .sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}
