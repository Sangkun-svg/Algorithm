// Insertion Sort
let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
for (let i = 1; i < array.length; i++) {
  let current = array[i];
  let left = i - 1;
  while (left >= 0 && array[left] > current) {
    array[left + 1] = array[left];
    left--;
  }
  array[left + 1] = current;
}
console.log(array);
