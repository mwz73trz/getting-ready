function getMiddle(s) {
  let sLength = s.length;
  if (sLength === 1 || sLength === 2) {
    return s;
  }
  if (sLength % 2 === 0) {
    let second = sLength / 2;
    let first = second - 1;
    return s[first] + s[second];
  } else {
    let mid = Math.floor(sLength / 2);
    return s[mid];
  }
}

console.log(getMiddle("a")); // a
console.log(getMiddle("ab")); // ab
console.log(getMiddle("Michael")); // h
console.log(getMiddle("even")); // ve
console.log(getMiddle("odd")); // d
