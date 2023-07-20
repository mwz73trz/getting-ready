function order(words) {
  if (words) {
    let result = [];
    words.split(" ").forEach((word) => {
      let index = Number(word.match(/[1-9]/g));
      result[index - 1] = word;
    });
    return result.join(" ");
  }
  return words;
}

console.log(order("is2 Thi1s T4est 3a")); // Thi1s is2 3a T4est
console.log(order("")); // ""
