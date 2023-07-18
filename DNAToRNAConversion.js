function DNAtoRNA(dna) {
  let temp = dna.split("");
  let result = "";
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "T") {
      result += "U";
    } else {
      result += temp[i];
    }
  }
  return result;
}

console.log(DNAtoRNA("GCAT"));
