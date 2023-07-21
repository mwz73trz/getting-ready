const powersOfTwo = (n) => {
  let results = [];
  let exp = 0;
  while (n > -1) {
    results.push(2 ** exp);
    exp++;
    n--;
  }
  return results;
};

console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); // [1, 2]
console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]
