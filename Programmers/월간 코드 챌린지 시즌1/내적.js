function solution(a = [1, 2, 3, 4], b = [-3, -1, 0, 2]) {
  var answer = [];
  a.map((el, idx) => {
    answer.push(a[idx] * b[idx]);
  });
  console.log(answer);
  return answer;
}
