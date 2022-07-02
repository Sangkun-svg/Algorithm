function solution(a, b) {
  var answer = 0;
  let more, less;
  if (a > b) (more = a), (less = b);
  else (less = a), (more = b);
  for (let i = less; i <= more; i++) {
    answer += i;
  }

  return answer;
}

// refactoring

function solution(a, b) {
  return ((a + b) / 2) * (Math.abs(a - b) + 1);
}
