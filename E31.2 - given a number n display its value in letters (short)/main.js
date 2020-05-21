function unitsToLetter(numero) {

    var units = ['', ' one ', ' two ', ' three ', ' four ', ' five ', ' six ', ' seven ', ' eight ', ' nine '];

    return units[numero];

}

function tensToLetters(numero) {
    // this function should resolve from 10 to 90

    var tents = ['', 'ten', 'twenty', ' thirty', ' fourty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

    return tents[numero];
}

function iregularNumsToLetters(numero) {

    var iregular = ['', 'eleven ', ' twelve ', ' thirteen ', ' fourteen ', ' fifteen ', ' sixteen ', ' seventeen ', ' eighteen', ' nineteen'];

    return iregular[numero]; //return the right number
}

function toLetters(arrayNumber) {

    //i.e arrayNumber = ["2", "7", "2"]

    var numInLetters = "";
    if (arrayNumber.length == 3) {
        numInLetters = unitsToLetter(arrayNumber[0]) + " hundred ";
    }

    if (arrayNumber.length == 1) {
        numInLetters = unitsToLetter(arrayNumber[0]);
    }



    if (arrayNumber.length >= 2) {

        if (arrayNumber.length == 2) {
            var tens = arrayNumber[0] + arrayNumber[1];

            if (tens > 10 && tens < 20) { // entre 11 and 19

                numInLetters += iregularNumsToLetters(arrayNumber[1]);
                return numInLetters;
            }
            else {
                numInLetters += tensToLetters(arrayNumber[0]);
                numInLetters += unitsToLetter(arrayNumber[1]);
                return numInLetters;
            }
        }
        else {
            var tens = arrayNumber[1] + arrayNumber[2];
        }


        if (tens > 10 && tens < 20) { // entre 11 and 19

            numInLetters += iregularNumsToLetters(arrayNumber[2]);
            return numInLetters;
        } else {
            numInLetters += tensToLetters(arrayNumber[1]);
            numInLetters += unitsToLetter(arrayNumber[2]);
        }
    }

    return numInLetters;
}



function turnNumbersIntoLetters(number) {

    var numStr = number.toString();
    console.log(numStr);

    var splited = numStr.split("").reverse();

    var arrayOfNum = [];

    for (var i = 0; i < numStr.length; i+=3) {
            var grpArray = splited.slice(i, i+3).reverse();
            arrayOfNum.push(grpArray);
    }
    console.log(arrayOfNum);


    var wholeNumToLetters = "";
    for (var j = 0; j < arrayOfNum.length; j++) {

        var marker = ""; //thousands, millions

        if (j == 1){
            marker = "thousand";
        }
        if (j == 2){
            marker = " million";
        }
        if(j == 3){
            marker = " billion";
        }
        if(j == 4){
            marker = " trillion"
        }

        wholeNumToLetters = toLetters(arrayOfNum[j]) + marker + wholeNumToLetters;
        console.log(wholeNumToLetters);

    }

    return wholeNumToLetters;

}

var especialNumber = 167811522833;
var numInLetters = turnNumbersIntoLetters(especialNumber);
console.log(especialNumber + " in letters is: " + numInLetters);


















// var myArray = "1234";
// var splited = myArray.split("");
// console.log(splited);
// var reversed = splited.reverse();
// console.log(reversed);

// var arrayOfNum = [];
// var frtRow = "";
// var lengthNum = myArray.length;

// for (var i = 0; i < lengthNum; i += 3){    
//        var myChunk = reversed.slice(i, i + 3);

//        arrayOfNum.push(myChunk);
// }

// console.log(arrayOfNum);

// var frstRow = arrayOfNum[0].reverse();
// console.log(frstRow);
// var sndRow = arrayOfNum[1].reverse();
// console.log(sndRow);
// var trdRow = arrayOfNum[2].reverse();
// console.log(trdRow);

