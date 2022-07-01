function maxSubArraySum(arr = [1, 2, 5, 2, 8, 1, 5], num = 1) {
  if (arr.length < num) return null;
  if (num === 1) return console.log(Math.max(...arr));
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr.slice(i, num + i).reduce((a, b) => a + b));
  }
  console.log(Math.max(...answer));
}
maxSubArraySum();

function maxSubArraySum(arr = [1, 2, 5, 2, 8, 1, 5], num = 4) {
  if (arr.length < num) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp = +arr[j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
maxSubArraySum();

// refactor
// 1. 첫번째의 합계를 구한다
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
}
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4);
