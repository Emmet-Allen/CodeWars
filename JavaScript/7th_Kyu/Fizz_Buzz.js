// Return an array
function fizzbuzz(n){
  var arr = [];

//Push i into an Array
    for(let i = 1; i <= n; i++){
      arr.push(i);
    }
//Loop through array    
      for(let j = 0; j < arr.length; j++){
//if index of array is divisible by 3        
          if(arr[j] % 5 === 0 && arr[j] % 3 === 0){
//assign that index value with Fizz
            arr[j] = "FizzBuzz";
              }
//if index of array is divisible by 5
            else if(arr[j] % 3 === 0){
//assign that index value with Buzz
              arr[j] = "Fizz";
            }
//if index of array is divisible by both 5 and 3
            else if(arr[j] % 5 === 0){
//assign that index value with FizzBuzz              
              arr[j] = "Buzz";
            }
        else{}
    }

return arr; 

}
