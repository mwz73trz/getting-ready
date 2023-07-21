const strCount = (str, letter) => {
  let strSplit = str.split("");
  let matches = strSplit.filter((let, i) => let === letter);
  return matches.length;
};

console.log(strCount("", "z")); // 0
console.log(strCount("Hello", "o")); // 1
console.log(strCount("Hello", "l")); // 2
