function findShort(s) {
  let temp = s.split(" ");
  let word = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length < word.length) {
      word = temp[i];
    }
  }
  return word.length;
}

console.log(findShort("Michael is busy"));
