function solution(price = 3, money = 20, count = 4) {
  let answer = 0;
  for (let index = 1; index <= count; index++) {
    answer += price * index;
  }
  answer > money ? console.log(answer - money) : console.log(0);
  return answer > money ? answer - money : 0;
}

solution();
