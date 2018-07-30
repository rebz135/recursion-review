// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // take in primative, array, obj, string, nested arrays/ objects
    // determine type
      // if primative return string
      // if array, loop through elements
      // add '['
        // if array or obj run stringify again with element as input
      // add ']'
      // if obj add '{', loop through key value pairs
        // if value is array or obj, run stringify with value
      // add '}'
  // return string

  return result;
};
