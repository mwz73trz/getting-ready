function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
    default:
      return "Error";
  }
}

console.log(basicOp("+", 25, 10)); // 35
console.log(basicOp("&", 6, 7)); // Error
console.log(basicOp("-", 45, 1)); // 44
console.log(basicOp("*", 2, 77)); // 154
console.log(basicOp("/", 26, 13)); // 2
