function solution(str, ending) {
  let result = str.endsWith(ending);
  return result;
}

console.log(solution("hello world", "world"));
