const reverseSeq = (n) => {
  let result = [];

  while (n > 0) {
    result.push(n);
    n--;
  }
  return result;
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
