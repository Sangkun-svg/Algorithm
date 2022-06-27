// 정답 통과 , 효율성 탈락 : 시간초과

// 처음 시도한 코드는 이렇게 짰습니다.
// 올바른 괄호가 포함되어 있다면 삭제시키는 방식으로 진행했습니다.
// 데스트 케이스는 모두 통과를 했지만 , 효율성 검사에서 탈락했습니다.
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
  if (s[0] === ")") return false;

  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt += 1;
    else cnt -= 1;
    if (cnt < 0) return false;
  }
  if (cnt !== 0) return false;
  return true;
}

// stack 을 이용한 코드function solution(s) {
function solution(s = "(())()") {
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
  }
  if (stack.length > 0) return false;
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
