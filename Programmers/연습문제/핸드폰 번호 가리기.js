function solution(phone_number) {
  var answer = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += "*";
  }
  return answer + phone_number.slice(phone_number.length - 4);
}

// Refactor

function solution(phone_number) {
  const stars = phone_number.length - 4;
  return "*".repeat(stars) + phone_number.slice(stars);
}
