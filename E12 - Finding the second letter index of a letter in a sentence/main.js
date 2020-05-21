
//FINDING THE SECOND LETTER INDEX OF A LETTER IN A SENTENCE OR PARAGRAPH

function secondIndexOfString(sourceString, letter){

    var eCounter = 0;

    for (var i = 0; i < sourceString.length; i++){
            
        if(letter == sourceString[i]){
            eCounter = eCounter + 1;
    
            if (eCounter == 2){
                return i;
            }
        } 
    }
    return -1;
}
 
var myString = "This is another example of how to create string variables";
var result1 = secondIndexOfString(myString, "e");
console.log( "Index at:" + result1);
var result2 = secondIndexOfString("Hello this is a test for Jose", "l"); // second time, what is the value of myParameterNumber
console.log( "Index at:" + result2);
var result3 = secondIndexOfString("Call this again", "i");
console.log( "Index at:" + result3);
