// 정답 통과 , 효율성 탈락 : 시간초과

function solution(s) {
  while (!!s.includes("()")) {
    s = s.replace("()", "");
  }
  return s.length === 0 ? true : false;
}

// 정답 참고 후 통과할 때까지 수정한 코드
// for-of 문을 사용하면 효율 x
// early return 을 사용하지 않으면 효율 x
// Strict Equal Operator 을 사용하지 않으면 효율 x
function solution(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt += 1;
    else cnt -= 1;
    if (cnt < 0) return false;
  }
  if (cnt !== 0) return false;
  return true;
}

// 참고 코드
function solution(s) {
  let opened = 0;
  for (const bracket of s) {
    if (bracket === "(") opened += 1;
    if (bracket === ")") opened -= 1;
    console.log(opened);
    if (opened < 0) return false;
  }
  return opened === 0;
}
