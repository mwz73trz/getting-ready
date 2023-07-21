const expressionsMatter = (a, b, c) => {
  return Math.max(
    a + b + c,
    a * b * c,
    a + b * c,
    (a + b) * c,
    a * b + c,
    a * (b + c)
  );
};

console.log(expressionsMatter(2, 1, 2)); // 6
console.log(expressionsMatter(2, 1, 1)); // 4
console.log(expressionsMatter(1, 1, 1)); // 3
console.log(expressionsMatter(1, 2, 3)); // 9
console.log(expressionsMatter(1, 3, 1)); // 5
console.log(expressionsMatter(2, 2, 2)); // 8
