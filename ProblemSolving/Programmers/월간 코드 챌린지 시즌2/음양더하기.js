// https://programmers.co.kr/learn/courses/30/lessons/76501

function sumAbsolutesNumbers(absolutes = [], signs = []) {
  if (absolutes.length !== signs.length) return false;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) absolutes[i] *= -1;
  }
  const result = absolutes.reduce((a, b) => a + b);
  console.log(result);
}

// refactor

function sumAbsolutesNumbers(absolutes = [], signs = []) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

sumAbsolutesNumbers([4, 7, 12], [true, false, true]);
sumAbsolutesNumbers([1, 2, 3], [false, false, true]);
