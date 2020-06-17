var humanYearsCatYearsDogYears = function(humanYears) {
var arr= [];

// Values for Cat Years
let catYear1 = 15;
let catYear2 = 9;

// Value for catYears for each additional year past 2
let catYearE = (humanYears - 2)  * 5;

// Values for Dog Years
let dogYear1 = 15;
let dogYear2 = 9;

//Value for dogYears for each additional year past 2
let dogYearE = (humanYears - 2) * 4;

// Conditional for humanYears == 1
if (humanYears == 1){
arr.unshift(catYear1);
arr.unshift(dogYear1);
arr.unshift(humanYears);
}

// Conditional for humanYears == 2
else if(humanYears == 2){
arr.unshift(catYear1 + catYear2);
arr.unshift(dogYear1 + dogYear2);
arr.unshift(humanYears); 
}

// Conditional to calculate for humanYears > 2
else if(humanYears > 2){
arr.unshift(catYear1 + catYear2 + catYearE);
arr.unshift(dogYear1 +dogYear2 + dogYearE);
arr.unshift(humanYears);
}

  return arr;
}
