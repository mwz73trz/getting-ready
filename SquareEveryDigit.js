function squareDigits(num) {
  let temp = Array.from(num.toString()).map(Number);
  let resultArr = [];
  for (let i = 0; i < temp.length; i++) {
    resultArr.push(temp[i] ** 2);
  }
  let result = resultArr.join("");
  return parseInt(result);
}

console.log(squareDigits(3214)); // 94116
console.log(squareDigits(3212)); // 9414
