const comp = (array1, array2) => {
  let a = array1;
  let b = array2;
  if (!a || !b || a.length !== b.length) return false;
  return (
    a
      .map((x) => x * x)
      .sort()
      .toString() === b.sort().toString()
  );
};

console.log(
  comp(
    [121, 144, 19, 161, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
); // true
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 36100, 25921, 361, 20736, 361]
  )
); // false
