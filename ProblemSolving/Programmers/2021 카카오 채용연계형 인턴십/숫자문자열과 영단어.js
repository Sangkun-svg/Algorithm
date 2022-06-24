function solution(str) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    str = str.split(arr[i]).join(i);
  }
  // arr.map((el, idx) => {
  //   str = str.replaceAll(el, idx);
  // });
  return Number(str);
}
