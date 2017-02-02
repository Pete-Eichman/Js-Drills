//Return true or false depending on if a number is prime or not.

function isPrime(num) {
  var count = 0;
  for (var i=2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
