const input = "K1KA5CB7";
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
