function postiveNegative(input) {
  let count = 0;
  let negTotal = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => (num > 0 ? count++ : (negTotal += num)));
  }
  return [count, negTotal];
}

console.log(
  postiveNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
); // [10, 65]
console.log(postiveNegative([])); // []
console.log(postiveNegative([0, 0])); // []
