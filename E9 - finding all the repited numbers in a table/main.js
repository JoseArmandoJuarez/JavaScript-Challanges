
/*Find the number with the most occurance

    1. create an empty array
    2. create a for loop with 100 iterations
    3. generate random numbers from 0 to 9
    4. sort the random numbers
    5. find the most repetitive numbers
    6. display 
*/


var myArray = [];

function randomNumberTable(){

    var ranNum = 0;

    for (var i = 0; i < 101; i++){
        ranNum = Math.floor(Math.random()*10);
        console.log("Random Number: " + ranNum);

        myArray.push(ranNum);
    }
    console.log(myArray);

    myArray.sort();
    console.log(myArray);

    

    var repeatedNum0 = 0;
    var repeatedNum1 = 0;
    var repeatedNum2 = 0;
    var repeatedNum3 = 0;
    var repeatedNum4 = 0;
    var repeatedNum5 = 0;
    var repeatedNum6 = 0;
    var repeatedNum7 = 0;
    var repeatedNum8 = 0;
    var repeatedNum9 = 0;

    for(var j = 0; j < myArray.length; j++){
        
        if (myArray[j] == 0){

            repeatedNum0 = repeatedNum0 + 1;
            console.log("Number 0 is repeated: " + repeatedNum0);
        } 
        else if (myArray[j] == 1){

            repeatedNum1 = repeatedNum1 + 1;
            console.log("Number 1 is repeated: " + repeatedNum1);
        } 
        else if (myArray[j] == 2){
            repeatedNum2 = repeatedNum2 + 1;
            console.log("Number 2 is repeated: " + repeatedNum2);
        }
        else if (myArray[j] == 3){
            repeatedNum3 = repeatedNum3 + 1;
            console.log("Number 3 is repeated:" +  repeatedNum3);
        }
        else if (myArray[j] == 4){
            repeatedNum4 = repeatedNum4 + 1;
            console.log("Number 4 is repeated: " + repeatedNum4);
        }
        else if (myArray[j] == 5){
            repeatedNum5 = repeatedNum5 + 1;
            console.log("Number 5 is repeated: " +  repeatedNum5);
        }
        else if (myArray[j] == 6){
            repeatedNum6 = repeatedNum6 + 1;
            console.log("Number 6 is repeated: " +  repeatedNum6);
        }
        else if (myArray[j] == 7){
            repeatedNum7 = repeatedNum7 + 1;
            console.log("Number 7 is repeated: " + repeatedNum7);
        }
        else if (myArray[j] == 8){
            repeatedNum8 = repeatedNum8 + 1;
            console.log("Number 8 is repeated: " + repeatedNum8);
        }
        else if (myArray[j] == 9){
            repeatedNum9 = repeatedNum9 + 1;
            console.log("Number 9 is repeated: " + repeatedNum9);
        }
    }

    
    numTable = "";
    for (var k = 0; k < myArray.length; k++){
        numTable += "<tr><td>" + myArray[k] + "</td>";

        if(k <= 9){
            if (k == 0){
                numTable += "<td>" + 0 + " is repeated " + repeatedNum0 + " times</td></tr>"; 
            }
            else if (k == 1){
                numTable += "<td>" + 1 + " is repeated " + repeatedNum1 + " times</td></tr>"; 
            }
            else if (k == 2){
                numTable += "<td>" + 2 + " is repeated " + repeatedNum2 + " times</td></tr>";
            }
            else if (k == 3){
                numTable += "<td>" + 3 + " is repeated " + repeatedNum3 + " times</td></tr>";
            }
            else if (k == 4){
                numTable += "<td>" + 4 + " is repeated " + repeatedNum4 + " times</td></tr>";
            }
            else if (k == 5){
                numTable += "<td>" + 5 + " is repeated " + repeatedNum5 + " times</td></tr>";
            }
            else if (k == 6){
                numTable += "<td>" + 6 + " is repeated " + repeatedNum6 + " times</td></tr>";
            }
            else if ( k == 7){
                numTable += "<td>" + 7 + " is repeated " + repeatedNum7 + " times</td></tr>";
            }
            else if ( k == 8){
                numTable += "<td>" + 8 + " is repeated " + repeatedNum8 + " times</td></tr>";
            }
            else if (k == 9){
                numTable += "<td>" + 9 + " is repeated " + repeatedNum9 + " times</td></tr>";
            }
        }
        else{
            numTable += "<td> </td></tr>";
        }

    }
    


    document.getElementById("randomNumberTable").innerHTML = numTable;

}

randomNumberTable();