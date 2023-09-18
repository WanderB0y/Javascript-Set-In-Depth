/* 
    1. Create an array called "numbers" with the following values:
    [10, 20, 15, 30, 15, 20, 35, 60, 10]


    2. Find the first duplicate value in "numbers" and print
    it out to the terminal

    HINT: Add the numbers to a Set as you for-loop over "numbers"
    This is quite challenging and is a common interview question 

*/

const numbersArray = [ 10, 20, 15, 30, 15, 20, 35, 60, 10 ];

const numbersSet = new Set();

for( let i = 0; i < numbersArray.length; i++){

    if (numbersSet.has(numbersArray[i])){
        console.log(numbersArray[i]);
    }
    else {
        numbersSet.add(numbersArray[i]);
    }
}