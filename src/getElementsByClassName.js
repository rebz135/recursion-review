// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let result = [];
  let classCheck = function (node) {
    if (node.classList) {
      if (node.classList.contains(className) > 0) {
        result.push(node);
      }
    }
    if (node.childNodes.length > 0) {
      node.childNodes.forEach(function(ele) {
        classCheck(ele);
      });
    }
    
  };
  classCheck(document.body);
  
  return result;
};

//document.body, element.childNodes, and element.classList

/*
Start with document.body
Find all elements within body
Check classlist for each of elements
If classlist contains target, add to result
Check for child nodes for each element
If child node, recurse
Return result
*/

