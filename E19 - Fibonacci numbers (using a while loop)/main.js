/**
 * 1. Create an empty array
 * 2. Create a while loop
 * 3. push the numbers into the empty array
 * 4. Display
*/


var fibonacciArray = [];

function fibonacciWhileLoop(stopAt){

    var k = 0;
    //var stopAt = 50000;
    var num1 = 1;
    var num2 = 0;
    var savedNum;

    while (k <= stopAt){

        savedNum = num1; //giving num1 to savedNum to pass it to num2 after to use it for the next loop

        num1 = num1 + num2;
        console.log(savedNum + " + " + num2 + " = " + num1);
        
        num2 = savedNum; //giving savedNum to num2 to use for the next loop

        if (num1 <= stopAt){
            fibonacciArray.push(num1);
            k ++; //increasing num everytime is going tru the loop
        }
        else if(num1 > stopAt){
            console.log(num2 + " is the END!");
            break; //break the loop and exit;
        }
    }

    console.log(fibonacciArray);

}

fibonacciWhileLoop(50000);



