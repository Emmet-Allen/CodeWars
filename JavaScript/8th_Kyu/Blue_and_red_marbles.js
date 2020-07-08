function guessBlue(blueStart, redStart, bluePulled, redPulled) {
 
 // Remainder of Blue Marbles
 let marblesBlue = blueStart - bluePulled;
 
 //Remainder of Red Marbles
 let marblesRed = redStart - redPulled;
 
 return (marblesBlue) / (marblesRed + marblesBlue);
 
 
 };
 
