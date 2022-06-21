// function solution(price = 3, money = 20, count = 4) {
//   let answer = 0;
//   for (let index = 1; index <= count; index++) {
//     answer += price * index;
//   }
//   answer > money ? console.log(answer - money) : console.log(0);
//   return answer > money ? answer - money : 0;
// }

// solution();
// function solution(numbers = [2, 1, 3, 4, 1]) {
//   var answer = [];

//   numbers.map((el, idx) => {
//     for (let j = idx + 1; j < numbers.length; j++) {
//       answer.push(numbers[idx] + numbers[j]);
//     }
//   });
// console.log([...new Set(answer)].sort((a, b) => a - b));
//   return [...new Set(answer)].sort((a, b) => a - b);
// }

// solution();

// function solution(a = [1, 2, 3, 4], b = [-3, -1, 0, 2]) {
//   const els = a.map((el, idx) => {
//     return el * b[idx];
//   });
//   return els.reduce((a, b) => a + b);
// }
// solution();

function solution(n) {
  return String(n).split("").sort().reverse().join("");
}
solution();
