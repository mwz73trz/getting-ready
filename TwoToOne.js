function longest(s1, s2) {
  let a = [...new Set(s1.split(""))];
  let b = [...new Set(s2.split(""))];

  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  let aCombo = [...new Set(a)];
  let result = aCombo.sort().join("");
  return result;
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
