function solution(str) {
  let temp = str.split("");
  let revTemp = temp.reverse();
  let result = revTemp.join("");
  return result;
}

console.log(solution("Michael"));
console.log(solution("Me"));
