

// var arr = [1,1,0,-1,-1];
var arr = [-4, 3, -9, 0, 4, 1];

function calculatingFractions(){

    var lengthArr = arr.length;
    var posNums = 0;
    var negNums = 0;
    var zeroNums = 0;

    for(var i = 0; i <= lengthArr; i++){

        if(arr[i] > 0){
            posNums += 1;
        }
        if(arr[i] < 0){
            negNums += 1;
        }
        if(arr[i] == 0){
            zeroNums += 1;
        }

    }
    console.log("positive numbers: " + posNums);
    console.log("negative numbers: " + negNums);
    console.log("Zeros: " + zeroNums);

    var posRatio = posNums / lengthArr;
    console.log(posRatio.toFixed(6));

    var negRatio = negNums / lengthArr;
    console.log(negRatio.toFixed(6));

    var zerosRatio = zeroNums / lengthArr;
    console.log(zerosRatio.toFixed(6));


}
calculatingFractions();