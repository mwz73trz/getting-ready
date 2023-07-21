const quarterOf = (month) => {
  if (month <= 12 && month > 0) return Math.ceil(month / 3);
  return undefined;
};

console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(5)); // 2
console.log(quarterOf(12)); // 4
console.log(quarterOf(0)); // undefined
console.log(quarterOf(13)); // undefined
console.log(quarterOf(1)); // 1
console.log(quarterOf(2)); // 1
console.log(quarterOf(4)); // 2
console.log(quarterOf(6)); // 2
console.log(quarterOf(7)); // 3
console.log(quarterOf(9)); // 3
console.log(quarterOf(10)); // 4
console.log(quarterOf(11)); // 4
