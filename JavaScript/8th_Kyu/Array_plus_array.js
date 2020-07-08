function arrayPlusArray(arr1, arr2) {
   var arrConcat = arr1.concat(arr2);
   var sum = arrConcat.reduce(function(a,b){
        return a+b; 
            },0);
  return sum;
}
