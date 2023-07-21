const otherAngel = (a, b) => {
  let result = 180 - (a + b);
  return result;
};

console.log(otherAngel(30, 60)); // 90
console.log(otherAngel(60, 60)); // 60
console.log(otherAngel(43, 78)); // 59
console.log(otherAngel(10, 20)); // 150
