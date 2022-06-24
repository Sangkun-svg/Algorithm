function solution(numbers = [1, 2, 3, 4, 6, 7, 8, 0]) {
  let answer = [];
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer.push(i);
  }
  return answer.reduce((a, b) => a + b);
}
solution();

// refactor

function solution2(numbers = [1, 2, 3, 4, 6, 7, 8, 0]) {
  return 45 - numbers.reduce((a, b) => a + b);
}
solution2();
