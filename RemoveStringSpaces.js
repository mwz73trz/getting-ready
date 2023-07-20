function noSpace(x) {
  let temp = x.replace(/\s+/g, "");
  let temp2 = x.replaceAll(" ", "");
  return temp2;
}

console.log(noSpace("Michael W Zura")); // MichaelWZura
console.log(noSpace("T  e l   l")); // Tell
console.log(noSpace("8aaa 3     rrr   ")); // 8aaa3rrr
