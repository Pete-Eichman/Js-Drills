//Return a reversed string without using a for loop.
function reverseString(str) {
  var revString = str.split('');
  revString = revString.reverse();
  revString = revString.join('');
  return revString;
};

//Return a reverse string without a for loop, in a single-line function.
function reverseString(str) {
  return str.split("").reverse().join("");
};
