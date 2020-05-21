
function aVeryBigSum(arrayNum){
 
    console.log(arrayNum);

    
    
// every number in the array can be a max of -2147483648 to +2147483647
// if the number is bigger you have to cancel the calculation or return -1
// add the validations you think necesar

    var sumOfElements = 0;
    for (var i = 0; i <= ar.length; i++){

        if(-2147483648 < ar[i] && ar[i] < 2147483647){

          sumOfElements += ar[i];

        }
        else if( ar[i] < -2147483648 || ar[i] > 2147483647){
            
            console.log("You have a number to big in the array")
        }
        

    }

    return sumOfElements;    

}
var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
var totalSum = aVeryBigSum(ar);
console.log("Total sum of the array is: " + totalSum)