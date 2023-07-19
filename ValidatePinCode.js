function validatePin(pin) {
  if ((pin.length === 4 || pin.length === 6) && /^[0-9]+$/.test(pin) === true) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePin("1234")); // true
console.log(validatePin("12345")); // false
console.log(validatePin("123456")); // true
console.log(validatePin("1234567")); // false
console.log(validatePin("a12")); // false
