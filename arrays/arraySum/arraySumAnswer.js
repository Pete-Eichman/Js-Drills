//Return the sum of an array of numbers.
//Example: array = [ 0, 1, 2, 3 ].
//Function returns 6.

function arraySum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};
