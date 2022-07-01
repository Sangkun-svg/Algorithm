function search(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log("result : ", i + 1);
      return i + 1;
    }
  }
  console.log(-1);
  return -1;
}
search([1, 2, 3, 4, 5, 6], 3);
search([1, 2, 3, 4, 5, 6], 5);
search([1, 2, 3, 4, 5, 6], 11);

// Refactor : Divide and Conquer Algorithm 적용
// 시간복잡도는 O(n log n)

function search(array, value) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    // consol/e.log(middle);
    let currentElement = array[middle];

    if (currentElement < value) {
      min = middle + 1;
    } else if (currentElement > value) {
      max = middle - 1;
    }
    console.log(middle);
    return middle;
  }
  return -1;
}

search([1, 2, 3, 4, 5, 6], 3);
search([1, 2, 3, 4, 5, 6], 5);
search([1, 2, 3, 4, 5, 6], 11);
