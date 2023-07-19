function disemvowel(str) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) continue;
    result += str[i];
  }
  return result;
}

console.log(disemvowel("Michael")); // Mchl
