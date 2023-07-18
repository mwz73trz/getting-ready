function rps(p1, p2) {
  let r = "rock";
  let s = "scissors";
  let p = "paper";
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === r && p2 === s) ||
    (p1 === s && p2 === p) ||
    (p1 === p && p2 === r)
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

console.log(rps("rock", "scissors"));
