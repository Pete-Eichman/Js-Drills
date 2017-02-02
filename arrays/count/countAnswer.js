//Return the amount of times an item appears in an array.
//Example: array = [1, 1, 1, 2], item = 1.
//Function returns 3.

function count(array, item) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == item) {
      count++;
    }
  }
  return count;
};
