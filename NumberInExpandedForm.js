function expandedForm(num) {
  let multiple = 10;
  let result = [];

  while (num > 1) {
    let remainder = num % multiple;
    if (remainder > 0) {
      result.unshift(remainder);
    }
    num -= remainder;
    multiple *= 10;
  }
  return result.join(" + ");
}

console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'
