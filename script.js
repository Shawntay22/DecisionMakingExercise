// 1a
let randomNum = Math.floor((Math.random()*5) + 1);  /* 
            random; number returned from 0 up
            floor; up to 4.99999 (*5) 
            + 1; to keep from being 0
            */
console.log(randomNum);

// OR
/* 
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);
*/

// 1b
if (randomNum >= 4) {
    console.log('Greater or equal to 4');
} else if (randomNum == 2 || randomNum === 3) {
    console.log('Equal to 2 or 3');
} else {
    console.log('Equal to 1');
}

// 1c
if (randomNum !== 3) {
    console.log('Not equal to 3');
}

// 1d
if (randomNum !== 3 &&  randomNum !== 5) {
    console.log("Not equal to 3 and 5.");
}

// 1e
if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 OR 4");
}

// Bonus
// 2

randomNum = (randomNum >= 4) ? "Greater than or equal to 4" : "Less than 4";
console.log(randomNum);

// OR randomNum >= 4 ? console.log ("greater than or equal to 4") : console.log("Less than 4.")

// 3
// Switch statement takes a peremeter/arguemnent and returns something based on the CASE (Or the match) that the parameter/argument goes with.
// In this example if randomNum is 1 it will display "One" in terminal, if randomNum is 2 it will display "Two", ect.
switch (randomNum) {
    case 1:
        console.log("One");
    // break;  Break keywords are needed between each case so that the code for the case that follows foes NOT also run.
    case 2:
        console.log("Two");
    break;
    case 3:
        console.log("Three");
    break;
    case 4:
        console.log("Four");
    break;
    case 5:
        console.log("Five");
        // The last case does not need a break, since there are no more cases to follow. 
}