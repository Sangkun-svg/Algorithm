// Selection Sort

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
for (let i = 0; i < array.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[minIndex] > array[j]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    let swap = array[minIndex];
    array[minIndex] = array[i];
    array[i] = swap;
  }
}
console.log(array);
