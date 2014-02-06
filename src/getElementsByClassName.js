// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node, result) {
  // your code here
  
  if(typeof node == "undefined") {
    node = document.body;
    result = [];
  }
  
  if(typeof node.classList != "undefined" && node.classList.contains(className)) {
    result.push(node);
  }
  if(node.childNodes.length > 0) {
    for(var i = 0; i < node.childNodes.length; i++) {
      result = getElementsByClassName(className, node.childNodes[i], result);
    }
  }
  
  return result;      //returning an array- not NodeList. Is this correct?
};
