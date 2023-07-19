const descending = function (n) {
  let strN = n.toString();
  let splitN = strN.split("");
  let sortSplitN = splitN.sort();
  let revN = sortSplitN.reverse();
  let reJoinN = revN.join("");
  let result = Number(reJoinN);
  return result;
};

console.log(descending(0)); // 0
console.log(descending(1)); // 1
console.log(descending(111)); // 111
console.log(descending(15)); // 51
console.log(descending(1021)); // 2110
console.log(descending(123456789)); // 987654321
