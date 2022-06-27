// (function solution(s = "(())()") {
//   if (s[0] === ")") return false;
//   let cnt = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") cnt += 1;
//     else cnt -= 1;
//     if (cnt < 0) return false;
//   }
//   if (cnt !== 0) return false;
//   return true;
//  })();

// (function solution(s = "(())()") {
//   if (s[0] === ")") return false;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push(s[i]);
//     else stack.pop();
//     console.log(stack);
//   }
//   if (stack.length > 0) return false;
//   return true;
// })();

(function solution(s = "(())()") {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      if (s[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
    console.log(stack);
  }
  if (stack.length > 0) return false;
  return true;
})();

// function solution(s) {
//   var temp = [];
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       temp.push(s[i]);
//     } else {
//       if (temp[temp.length - 1] === "(") {
//         temp.pop();
//       } else {
//         temp.push(s[i]);
//       }
//     }
//   }
//   if (temp.length > 0) {
//     return false;
//   }
//   return true;
// }
