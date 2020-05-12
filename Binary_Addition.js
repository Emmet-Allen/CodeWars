function addBinary(a,b) {
  var n =  a + b; 
  var binary = "";
  
  while (n > 0){
    n = Math.floor(n / 2);
    binary = (n % 2) + binary;
   
  }
  
  return binary; 

}
