//  https://programmers.co.kr/learn/courses/30/lessons/87389?language=javascript

function solution(n) {
  let answer = 0;
  while (true) {
    if (n % answer == 1) {
      break;
    }
    answer++;
  }
  return answer;
}

// refactor..

function solution(n) {
  let answer = 1;
  while (n % answer != 1) {
    answer++;
  }
  return answer;
}
