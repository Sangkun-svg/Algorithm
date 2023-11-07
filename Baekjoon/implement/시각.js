// 완전탐색

const N = 5;
let cnt = 0;

for (let i = 0; i < N + 1; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      if (String("" + i + j + k).includes("3")) {
        cnt = cnt + 1;
      }
    }
  }
}
console.log(cnt);
