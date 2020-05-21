/**
 * 1. create an empty array
 * 2. create a for loop from 1 to 50
 * 3. generate random numbers
 * 4. push to empty array
 * 5. sort the numbers without using the .sort emthod
 */

var randomNumbers = [];

function sortingNumbers(){

    var randomNum = 0;
    var arraySize = 15;

    for(var i = 1; i <= arraySize; i++){
        randomNum = Math.floor(Math.random() * 50);
    
        randomNumbers.push(randomNum);

    }

    console.log(randomNumbers);

    num1 = 0;
    num2 = 0;

    for(var j = 0; j < arraySize; j++){

        for(var k = 0; k < arraySize; k++){

            if(randomNumbers[k] > randomNumbers[k+1]){
    
                num1 = randomNumbers[k];
                num2 = randomNumbers[k + 1];
    
                randomNumbers[k] = num2;
                randomNumbers[k + 1] = num1;
                
            }
            console.log(randomNumbers[k]);
            
        }
        console.log("END OF LOOP");
    
    }

    console.log(randomNumbers);

    randomNumbers.sort(compareByNumbersAsString);
    console.log(randomNumbers);

    randomNumbers.sort(compareByNumbers);
    console.log(randomNumbers);

}

//sorting as characters    note. .sort() does the same thing as my function
function compareByNumbersAsString(number1, number2){
    if(number1.toString() < number2.toString()){
        return -1;
    }
    if(number1.toString() > number2.toString()){
        return 1;
    }
    return 0;
}

//sorting as numbers
function compareByNumbers(number1, number2){

    if(number1 < number2){
        return -1;
    }
    if(number1 > number2){
        return 1;
    }
    return 0;
}

sortingNumbers();