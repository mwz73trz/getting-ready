function high(x) {
  let wordList = x.split(" ");

  const getScore = (word) => {
    return word
      .split("")
      .reduce(
        (prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96,
        0
      );
  };

  const scoreList = wordList.map((word) => getScore(word));

  let highestIndex = 0;
  let highestScore = 0;

  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });

  return wordList[highestIndex];
}

console.log(high("aa b")); // aa
console.log(high("b aa")); // b
console.log(high("bb d")); // bb
console.log(high("d bb")); // d
console.log(high("aaa b")); // aaa
