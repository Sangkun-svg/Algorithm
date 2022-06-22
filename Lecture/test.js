function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
let t3 = performance.now();
addUpTo2(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);

function double(array) {
  let newArray = [];
  for (let idx = 0; idx < array.length; idx++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}
