function digPow(n, p) {
  let temp = String(n).split("");
  let k = 0;
  for (let i = 0; i < temp.length; i++) {
    k += Number(temp[i]) ** p;
    p++;
  }
  let result = k / n;
  if (Number.isInteger(result)) {
    return result;
  } else {
    return -1;
  }
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
