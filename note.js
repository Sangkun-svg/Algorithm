// function solution(
//   arr1 = [
//     [1, 2],
//     [2, 3],
//   ],
//   arr2 = [
//     [3, 4],
//     [5, 6],
//   ]
// ) {
//   var answer = [[]];
//   arr1.reduce((a, b) => console.log(a, b));
// }
// solution();

// function solution(participant, completion) {
//   var answer = "";
//   for (let i = 0; i < participant.length; i++) {
//     for (let j = 0; j < completion.length; j++) {
//       participant[i] == completion[j] ? null : (answer = participant[i]);
//     }
//   }

//   return answer;
// }

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// animals.slice(1);
// console.log(animals);

function solution(
  participant = ["mislav", "stanko", "mislav", "ana"],
  completion = ["stanko", "ana", "mislav"]
) {
  const answer = participant.filter((el) => !completion.includes(el));
  participant.filter((el) => console.log(el));
  return answer;
}
// solution();
function solution(arr = [10]) {
  var answer = [];
  const min = Math.min.apply(null, arr);
  arr.map((el) => {
    if (el > min) {
      return answer.push(el);
    }
  });
  return answer[0] ?? [-1];
}
solution();
