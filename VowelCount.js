function getCount(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(getCount("Michael")); // 3
console.log(getCount("abc")); // 1
console.log(getCount("aaa bbb ccc ddd eee")); // 6
