function anagram(str1 = "Aaz", str2 = "zza") {
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
