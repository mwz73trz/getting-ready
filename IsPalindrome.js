const isPalindrome = (x) => {
  if (x === "" || x.length === 1) return true;
  let word = x.toLowerCase();
  let comp = word.split("").reverse().join("");
  if (comp === word) return true;
  return false;
};

console.log(isPalindrome("")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("hannah")); // true
console.log(isPalindrome("Michael")); // false
console.log(isPalindrome("aBbA")); // true
