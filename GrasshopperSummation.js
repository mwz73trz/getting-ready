var summation = function (num) {
  let counter = 1;
  let total = 0;
  while (counter <= num) {
    total += counter;
    counter += 1;
  }
  return total;
};

console.log(summation(2)); // 3
console.log(summation(8)); // 36
console.log(summation(1)); // 1
