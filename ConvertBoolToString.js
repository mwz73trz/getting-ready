function boolToWord(bool) {
  switch (bool) {
    case true:
      return "Yes";
      break;
    case false:
      return "No";
      break;
    default:
      return "Not a value";
  }
}

console.log(boolToWord(true));
console.log(boolToWord(false));
