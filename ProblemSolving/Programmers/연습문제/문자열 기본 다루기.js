//school.programmers.co.kr/learn/courses/30/lessons/12918

https: function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  if (!!s.match(/[^0-9]/)) return false;
  return true;
}
