/**
 *  1. create an empty array
 *  2. use a for loop
 *  3. make sure the letters are in lowerCase 
 *  3. push the letters into the array
 *  4. Create another empty Array
 *  5. reverse the alphabet so it goes from 'z' to 'a'
 *  6. make sure the letters are upperCase
 *  7. push the letters into the array
 *  4. display
 */


var alphabetArray = [];
var reverseAlphabetArray = [];


function alphabetInLowerCase(){

    var alphabetAscii = "";

    //the ascii for the alphabet starts from 65 to 90
    //Can also use the numbers 97 to 122 for the lowerCase letters
	for(var i = 65; i < 91; i++){

        alphabetAscii = String.fromCharCode(i).toLowerCase(i);
        alphabetArray.push(alphabetAscii);

    }

    console.log(alphabetArray);

    var reverseAlphabet = "";

    for (var k = 90; k > 64; k--){

        reverseAlphabet = String.fromCharCode(k);
        reverseAlphabetArray.push(reverseAlphabet);
    
    }
    console.log(reverseAlphabetArray);

}

 alphabetInLowerCase();