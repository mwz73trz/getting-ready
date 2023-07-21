const duplicateCount = (text) => {
  let comp = text.toLowerCase();
  let arr1 = comp.split("");
  let set1 = new Set(comp);
  return arr1.length - set1.size;
};

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcd")); // 0
console.log(duplicateCount("aabc")); // 1
console.log(duplicateCount("aAbbcd")); // 2
