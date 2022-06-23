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
// function solution(arr = [10]) {
//   var answer = [];
//   const min = Math.min.apply(null, arr);
//   arr.map((el) => {
//     if (el > min) {
//       return answer.push(el);
//     }
//   });
//   return answer[0] ?? [-1];
// }
// function solution(a = 5, b = 24) {
//   const date = new Date(2016, a - 1, b).getDay();
//   console.log(date);
//   var answer = ["SUN", "MON", "TUE", "WED", "THU", " FRI", " SAT"];
//   console.log(answer[date]);
//   return answer[date];
// }
function solution(str) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (Number(str)) {
    console.log(str);
    return Number(str);
  }

  arr.map((el, idx) => (str = str.replaceAll(el, String(idx))));
  console.log(str);
  return Number(str);
}
solution("one4seveneight");
solution("23four5six7");
solution("2three45sixseven");
solution("123");
// const T = "(())()";
// const F = "(()(";

// function solution(s = T) {
//   for (let i = 0; i <= 3; i++) {
//     console.log(i, "번째 :", s);
//     s = s.replace("()", "");
//   }
//   console.log(s ?? "nullish");
//   return s === "" ? true : false;
// }

// // solution();

// const test = (s) => {
//   console.log(s.replace("one", 1));
// };
// test("one2one");
// const test2 = (s) => {
//   console.log(s.replaceAll("one", 1));
// };
// test2("one2one");
