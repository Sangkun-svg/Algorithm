function solution(numbers = [2, 1, 3, 4, 1]) {
  var answer = [];
  const sortNums = numbers.sort();

  sortNums.map((el, idx) => {
    for (let j = idx + 1; j < sortNums.length; j++) {
      answer.push(sortNums[idx] + sortNums[j]);
    }
  });
  const set = [...new Set(answer)];
  answer = set.sort((a, b) => a - b);
  return answer;
}

// Refactor..

function solutionRefactor(numbers) {
  var answer = [];
  numbers.map((el, idx) => {
    for (let j = idx + 1; j < numbers.length; j++) {
      answer.push(el + numbers[j]);
    }
  });
  return [...new Set(answer)].sort((a, b) => a - b);
}
