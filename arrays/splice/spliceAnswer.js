//Add an iem anywhere in the array.
//Example array = [1, 3 ,4], item = 2, index = 1.
//Function returns [1, 2, 3, 4].

function(array, item, index) {
  array.splice(index, 0, item);
  return array;
};
