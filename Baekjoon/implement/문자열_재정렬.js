const input = "AJKDLSI412K4JSJ9D";
const stringArr = [];
const numArr = [];
input.split("").map((el) => {
  if (!parseInt(el)) {
    stringArr.push(el);
  } else {
    numArr.push(el);
  }
});
console.log(
  "" + stringArr.sort().join("") + numArr.map(Number).reduce((a, b) => a + b)
);
