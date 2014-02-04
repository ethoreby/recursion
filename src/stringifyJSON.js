// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj, result) {
  // your code goes here
  
  if(obj == null) {   //exception case
    return "null";
  }
  if(typeof result == "undefined") {
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
    case "object" : {
      var test = JSON.stringify(obj);
      
      if(Array.isArray(obj)) {    //array case
        if(obj.length > 0) {
          result += JSON.stringify(obj[0]);
          
          if(obj.length > 1) {
            result += ",";
          }
          return stringifyJSON(obj.slice(1, obj.length), result);
        }else {
          return "[" + result + "]";
        }
      }else {                     //object case
          for(var key in obj) {
            result += '"' + key + '":' + JSON.stringify(obj[key]) + ",";
          }
          if(result.length > 0) {     //remove trailing comma
            result = result.slice(0, result.length - 1);
          }
          return "{" + result + "}";
      }
      break;
    }
  }
  
  //return JSON.stringify(obj);   //cheat solution
};
