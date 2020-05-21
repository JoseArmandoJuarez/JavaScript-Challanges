

function diagonalSum (arr){

    var length = arr.length;
    var diagonal1 = 0;
    var diagonal2 = 0;

    for(var i = 0; i < length; i++){
        for(var j = 0; j < length; j++){
            //console.log(i, j);

            //first diagonal (0,0) (1,1) (2,2)
            if (i == j){
                diagonal1 += arr[i][j];
                console.log("diagonal 1:  " + arr[i][j])
            }

            //second diagonal (0,2) (1,1) (2,0)
            if(i + j == length - 1){
                diagonal2 += arr[i][j];
                console.log("diagonal 2:  " + arr[i][j])
            }

        }
    }
    console.log("Sum of diagonal 1:  " + diagonal1);
    console.log("Sum of diagonal 2:  " + diagonal2);
    totalDif = diagonal1 - diagonal2;
    console.log("Total Difference:   " + totalDif);

    return Math.abs(diagonal1 - diagonal2);
}
//var arr = [[1,2,3], [4,5,6],[9,8,9]];
var arr = [[5,2,33], [41,54,62],[91,38,36]];
var totalDifference = diagonalSum(arr);
console.log("Total difference is: " + totalDifference)