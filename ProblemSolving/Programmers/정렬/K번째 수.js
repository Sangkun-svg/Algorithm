//programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
https: function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    for (let j = 0; j < 3; j++) {
      let result = array
        .slice(commands[i][j] - 1, commands[i][j + 1])
        .sort((a, b) => a - b);
      if (!!result[commands[i][j + 2] - 1]) {
        answer.push(result[commands[i][j + 2] - 1]);
      }
    }
  }
  return answer;
}
