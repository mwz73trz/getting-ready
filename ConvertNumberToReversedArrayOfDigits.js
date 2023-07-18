function digitize(n) {
  var splitN = String(n).split("").reverse().map(Number);
  return splitN;
}

console.log(digitize(35231));
