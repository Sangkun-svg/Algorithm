// https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr) {
  var answer = [];
  const min = Math.min.apply(null, arr);
  arr.map((el) => {
    if (el > min) {
      return answer.push(el);
    }
  });
  return answer[0] == undefined || null ? [-1] : answer;
}
