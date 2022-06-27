//programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

https: function solution(num) {
  if (num === 1) return 0;
  let cnt = 0;
  while (true) {
    num % 2 !== 0 ? (num = num * 3 + 1) : (num = num / 2);
    cnt++;
    if (num === 1) break;
    if (cnt >= 499) return -1;
  }
  return cnt;
}

// refactor

function solution(num, cnt = 0) {
  if (num === 1) return 0;

  while (num != 1 && cnt != 500) {
    num % 2 !== 0 ? (num = num * 3 + 1) : (num = num / 2);
    cnt++;
  }

  return cnt === 500 ? -1 : cnt;
}
