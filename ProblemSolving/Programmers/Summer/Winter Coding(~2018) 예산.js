// 빠르게 답에 근접했지만 정렬에 대한 지식 부족으로 다른 사람의 풀이를 봄
// 다른 사람의 풀이를 보고도 정렬문제인지 인지를 못했음
// TODO: 일반 정렬과 수식이 있는 정렬의 차이를 정확히 이해 할 필요가 있음
// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript#

function solution(d, budget) {
  let count = 0;
  let value = 0;
  d.sort((a, b) => a - b).map((item) => {
    value = value + item;
    if (value <= budget) {
      count++;
    }
  });
  return count;
}
