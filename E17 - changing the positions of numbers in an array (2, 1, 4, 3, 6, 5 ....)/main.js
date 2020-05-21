/**
 * 1. Create an empty array
 * 2. Create a for loop and generate numbers from 1 to 100
 * 3. Push the numbers into empty array
 * 4. display array in the console
 * 5. Create a nother for loop to switch the positions of the numbers
 * 6. push the numbers into array
 * 7. display
 */

var numberArray = [];

function numberSwitch(){

    var number = 0;

    for (var i = 1; i <= 100; i++){

        number = i;
        numberArray.push(number);

    }


    //Switching the position of the numbers
    tempA = 0;
    tempB = 0;

    for (var k = 0; k < numberArray.length; k+=2){
        
        //if (k+1 < numberArray.length - 1){
            
            tempA = numberArray[k];
            tempB = numberArray[k + 1];

            numberArray[k] = tempB;
            numberArray[k + 1] = tempA;
            
            
            console.log(numberArray[k]);
            console.log(numberArray[k + 1]);

        //}

        
        
    }

    console.log(numberArray);

}

numberSwitch();