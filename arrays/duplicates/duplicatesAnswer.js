//Return a new array of only the items that had duplicates from the original array.
//Example: array = [0, 0, 1, 1, 2].
//Function returns newArray= [0, 1].

function returnDuplicates(array) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if  (i != arr.lastIndexOf(arr[i])) {
      if (!newArray.includes(arr[i])){
          newArray.push(arr[i]);
      }
    }
  }
  return newArray;
};
