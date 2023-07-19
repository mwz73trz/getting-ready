function addBinary(a, b) {
  let total = a + b;
  let result = Number(total).toString(2);
  return result;
}

console.log(addBinary(1, 1)); // 10
console.log(addBinary(5, 9)); // 1110
