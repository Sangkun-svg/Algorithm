// 합해서 0이 되는 쌍을 찾아 []로 반환하라
function sumZero(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        answer.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(answer);
}

sumZero([-4, -3, -2, -1, 0, 5]);

// 다중 포인터 패턴을 사용해 리팩토링한 결과
// 처음과 끝에서 부터 이동을 시작한 경우
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  let answer = [];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return answer.push[(arr[left], arr[right])];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// 시작점부터 두개의 포인터를 지정해 단방형으로 이동하는 경우
function uniqValue(arr = []) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
