function persistence(num) {
  let digits = num.toString().split("").map(Number);
  let total = 1;
  let counter = 0;

  while (digits.length > 1) {
    digits.forEach((digit) => (total *= digit));
    digits = total.toString().split("").map(Number);
    console.log(total);
    total = 1;
    counter++;
  }
  return counter;
}

console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4
