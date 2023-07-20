function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let high = arr[0];
  let low = arr[0];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > Number(high)) {
      high = arr[i];
    }
    for (let j = 0; j < arr.length; j++) {
      if (Number(arr[i]) < Number(low)) {
        low = arr[i];
      }
    }
  }
  resultArr.push(high);
  resultArr.push(low);

  return resultArr.join(" ");
}

console.log(highAndLow("1 2 3")); // 3 1
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // 42 -9
