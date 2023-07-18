function repeatStr(n, s) {
  var result = "";
  while (n > 0) {
    result += s;
    n--;
  }
  return result;
}

console.log(repeatStr(3, "Hello"));

console.log("hello".repeat(3));
