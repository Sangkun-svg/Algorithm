// 내가 작성한 코드
// price와 count 의 값을 누적시킬 방법이 떠오르지 않아 배열에 담은 후 reduce 를 사용해 누적합 계산
// 비효율적인 판단이였음. 좀 더 깊게 생각할 필요가 있을거 같다.

function solution(price = 3, money = 20, count = 4) {
  const totalPrice = [];
  for (let index = 1; index <= count; index++) {
    totalPrice.push(price * index);
  }
  const sum = totalPrice.reduce((preValue, curValue) => preValue + curValue);
  const result = sum - money;
  return result > 0 ? result : 0;
}

// 리팩토링 후 내 코드
function solutionRefactor(price = 3, money = 20, count = 4) {
  let answer = 0;
  for (let index = 1; index <= count; index++) {
    answer += price * index;
  }
  return answer > money ? answer - money : 0;
}
