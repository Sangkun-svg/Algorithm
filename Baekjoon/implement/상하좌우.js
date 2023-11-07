// N * N
// 가장 완쪽은 1,1
// 첫째줄은 N
// 두번재줄은 이동 계획서

const input = [5, "RRRUDD"];
const N = input.shift();
const plans = input[0].split("");
let x = 1;
let y = 1;
const moveType = ["L", "R", "U", "D"];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
for (const el of input) {
}
