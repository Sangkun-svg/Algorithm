function solution(s = "try") {
  s = s
    .split("")
    .map((el, idx) => ((idx + 1) % 2 !== 0 ? (s[idx] = el.toUpperCase()) : el))
    .join("");
  console.log(s);
}
solution();
