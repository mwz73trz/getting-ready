function wave(str) {
  let result = [];

  if ([...str].length === 0) return [];

  for (let i = 0; i < str.length; i++) {
    let temp = str.split("");
    if (temp[i] === " ") continue;
    temp[i] = temp[i].toUpperCase("");
    result.push(temp.join(""));
  }
  return result;
}

console.log(wave("hello")); // [Hello, hEllo, heLlo, helLo, hellO]
console.log(wave("")); // ""
console.log(wave("michael")); // [Michael, mIchael, miChael, micHael, michAel, michaEl, michaeL]
console.log(wave("p s u")); // [P s u, p S u, p s U]
console.log(wave("two words"));
