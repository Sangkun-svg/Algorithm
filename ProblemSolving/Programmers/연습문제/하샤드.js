function solution(x) {
  let total = 0;
  let y = x.toString();
  for (let i = 0; i < y.length; i++) {
    total += Number(y[i]);
  }
  return x % total === 0 ? true : false;
}
