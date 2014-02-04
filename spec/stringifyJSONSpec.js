// test cases are described in fixtures.js
describe("stringifyJSON", function(){
  it("should match the result of calling JSON.stringify", function(){
    
    var arrayWithValidElements = stringifiableValues;       //test objects previously undefined. Is this correct? --see fixtures.js
    var objectWithInvalidAttributes = nonStringifiableValues;
    
    arrayWithValidElements.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

    objectWithInvalidAttributes.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

  });
});
