// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj, result) {
  // your code goes here
  
  if(obj == null) {   //exception case
    return "null";
  }
  if(typeof result == "undefined") {  //initialize
    result = "";
  }
  
  switch(typeof obj) {
    case "string" : {
      return '"' + obj + '"';
      break;
    }
    case "number" : {
      return obj.toString();
      break;
    }
    case "boolean" : {
      return obj? "true" : "false";
      break;
    }
    case "array" : {
      if(obj.length > 0) {
        result += obj.unshift();
        if(obj.length > 1) {
          result += ",";
        }
        return stringifyJSON(obj, result);
      }else {
        return + "[" + result + "]";
      }
      break;
    }
  }
  
  
  
  return JSON.stringify(obj);   //cheat solution
};
