function derive(coefficient,exponent) {

  
  
  
  var multi = coefficient * exponent;
  var expo = exponent - 1; 
  
  var a = multi.toString();
  var c = "x^";
  var b = expo.toString();
  
  
  
    var results = a + c + b;
    return results;
     
}
  
