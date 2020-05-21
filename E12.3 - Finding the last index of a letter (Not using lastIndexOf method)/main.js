

function lastIndexOfString(sourceString, letter){

    for (var k = myString.length - 1; k < myString.length; k--){

        if(letter == sourceString[k]){
            
            return k;
            
        }
    }

    return -1;

}


var myString = "This is another example of how to create string variables";

var letter = "a";
var result1 = lastIndexOfString(myString, letter);
console.log("Last index of letter a is at: " + result1);

var letter = "e";
var result2 = lastIndexOfString(myString, letter);
console.log("Las index of letter e is at: " + result2);

var letter = "v";
var result3 = lastIndexOfString(myString, letter);
console.log("Las index of letter v is at: " + result3);
