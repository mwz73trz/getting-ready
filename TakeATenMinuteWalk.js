const isValidWalk = (walk) => {
  let ns = 0;
  let ew = 0;

  for (let dir of walk) {
    if (dir == "n") ns += 1;
    if (dir == "s") ns -= 1;
    if (dir == "e") ew += 1;
    if (dir == "w") ew -= 1;
  }
  return walk.length == 10 && ns == 0 && ew == 0;
};

console.log(isValidWalk(["n"])); // false
console.log(isValidWalk(["n", "e"])); // false
console.log(isValidWalk(["n", "e", "w"])); // false
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
); // false
