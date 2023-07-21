function past(h, m, s) {
  if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) return 0;

  let hToM = h * 60;
  let mToS = (hToM + m) * 60;
  let totS = mToS + s;
  return totS * 1000;
}

console.log(past(0, 1, 1)); // 61000
console.log(past(1, 1, 1)); // 3661000
console.log(past(0, 0, 0)); // 0
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 0, 0)); // 3600000
