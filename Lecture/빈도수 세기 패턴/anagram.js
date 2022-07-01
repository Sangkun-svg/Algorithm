function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let objStr1 = {};
  let objStr2 = {};

  const putConvertLower = (obj, data) => {
    data = data.toLocaleLowerCase();
    return (obj[data] = (obj[data] || 0) + 1);
  };

  for (const el of str1) {
    putConvertLower(objStr1, el);
  }
  for (const el of str2) {
    putConvertLower(objStr2, el);
  }

  for (const key in objStr1) {
    if (!(key in objStr2)) return false;
    if (objStr1[key] !== objStr2[key]) return false;
  }
  return true;
}

// refactor

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj = {};
  for (const el of str1) {
    obj[el] ? (obj[el] += 1) : (obj[el] = 1);
  }

  for (const el of str2) {
    if (!obj[el]) {
      return false;
    } else {
      obj[el] -= 1;
    }
  }
  return true;
}
