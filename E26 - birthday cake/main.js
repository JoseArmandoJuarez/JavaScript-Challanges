


function blowCandleAmount(candles){

    candles.sort();
    console.log(candles);


    var count = 0;
    var maxNumber = candles[0];

    for(var i = 0; i < candles.length; i++){

        if(maxNumber < candles[i]){
            maxNumber = candles[i];
            console.log("current: " + candles[i]);
        }
    }

    for(var i = 0; i < candles.length; i++){

        if(candles[i] == maxNumber){
            count++;
        }
    }
    
    console.log("Biggest: " + maxNumber);
    console.log("is repeated: " + count);

    return count;




}

var arr = [4, 1, 3, 4];
//var arr = [3, 5, 5, 3, 6, 5, 3];
var candlesBlown = blowCandleAmount(arr);
console.log("She can blow out " + candlesBlown+ " candles");
