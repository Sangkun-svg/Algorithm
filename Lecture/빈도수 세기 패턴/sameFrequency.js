function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  let obj1 = {};
  let obj2 = {};
  if (num1.length !== num2.length) return false; // consider edge case

  const convertToObj = (target, object) => {
    for (const el of target) {
      !object[el] ? (object[el] = 1) : (object[el] += 1);
    }
  };
  convertToObj(num1, obj1);
  convertToObj(num2, obj2);

  for (const key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(22, 222);
sameFrequency(3589578, 5879385);
