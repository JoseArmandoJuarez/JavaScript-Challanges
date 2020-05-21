

function indexOfString(sourceString, letter){
    
    //return sourceString.indexOf(letter);

    for (var j = 0; j < sourceString.length; j++){

        if(letter == sourceString[j]){
            
            return j;

        }
    }

    return -1;

}

var letter1 = "o";
var myString = "This is another example of how to create string variables";
var result1 = indexOfString(myString, letter1);
console.log("Index at: " + result1);