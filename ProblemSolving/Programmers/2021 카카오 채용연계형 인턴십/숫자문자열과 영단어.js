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
  arr.map((el, idx) => {
    const regex = new RegExp("ReGeX" + el + "ReGeX");
    console.log(el);
    str.replace(regex, idx);
  });
  // arr.map((el, idx) => {
  //   if (str.includes(el)) {
  //     str = str.replace(el, idx);
  //   }
  // });
  return Number(str);
}
