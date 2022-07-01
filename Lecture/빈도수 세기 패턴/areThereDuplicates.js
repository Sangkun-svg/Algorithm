function areThereDuplicates(...args) {
  let answer = false;
  let obj = {};

  for (const el of args) {
    !obj[el] ? (obj[el] = 1) : (obj[el] += 1);
  }

  Object.values(obj).map((el) => {
    el > 1 ? (answer = true) : null;
  });
  return answer;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// refactor

function areThereDuplicates() {
  let data = Object.values(arguments);
  let answer = false;
  let obj = {};

  for (const el of data) {
    !obj[el] ? (obj[el] = 1) : (obj[el] += 1);
  }
  for (const key in obj) {
    obj[key] > 1 ? (answer = true) : null;
  }
  return answer;
}
