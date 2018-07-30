// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'function' || obj === undefined) {
    return undefined;
  }
  
  if (obj === null) {
    return 'null';
  }
  
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    let result = '[';
    obj.forEach((value, index) => {
      if (index !== obj.length - 1) {
        result += stringifyJSON(value) + ',';
      } else {
        result += stringifyJSON(value);
      }
    });
    return result + ']';
  }

  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    
    let result = '{';
    for (var key in obj) {
      if (stringifyJSON(obj[key]) !== undefined) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      
    }
    if (result[result.length - 1] === ',') {
      result = result.substring(0, result.length - 1);
    }
    
    return result + '}';
  }

  // primative
  return String(obj);
};
