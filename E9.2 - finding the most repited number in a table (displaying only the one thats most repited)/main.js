
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
            
        } 
        else if (myArray[j] == 1){

            repeatedNum1 = repeatedNum1 + 1;
           
        } 
        else if (myArray[j] == 2){
            repeatedNum2 = repeatedNum2 + 1;
            
        }
        else if (myArray[j] == 3){
            repeatedNum3 = repeatedNum3 + 1;
            
        }
        else if (myArray[j] == 4){
            repeatedNum4 = repeatedNum4 + 1;

        }
        else if (myArray[j] == 5){
            repeatedNum5 = repeatedNum5 + 1;

        }
        else if (myArray[j] == 6){
            repeatedNum6 = repeatedNum6 + 1;

        }
        else if (myArray[j] == 7){
            repeatedNum7 = repeatedNum7 + 1;

        }
        else if (myArray[j] == 8){
            repeatedNum8 = repeatedNum8 + 1;
           
        }
        else if(myArray[j] == 9){
            repeatedNum9 = repeatedNum9 + 1;
           
        }
    }

    console.log("Number 0 is repeated: " + repeatedNum0);
    console.log("Number 1 is repeated: " + repeatedNum1);
    console.log("Number 2 is repeated: " + repeatedNum2);
    console.log("Number 3 is repeated:" +  repeatedNum3);
    console.log("Number 4 is repeated: " + repeatedNum4);
    console.log("Number 5 is repeated: " +  repeatedNum5);
    console.log("Number 6 is repeated: " +  repeatedNum6);
    console.log("Number 7 is repeated: " + repeatedNum7);
    console.log("Number 8 is repeated: " + repeatedNum8);
    console.log("Number 9 is repeated: " + repeatedNum9);




    
    
    var numTable = "";
    
    for (var k = 0; k < myArray.length; k++){
        numTable += "<tr><td>" + myArray[k] + "</td>";

        if (k <= 0){
            if (repeatedNum0 >= repeatedNum1 && repeatedNum0 >= repeatedNum2 && repeatedNum0 >= repeatedNum3 && repeatedNum0 >= repeatedNum4 && repeatedNum0 >= repeatedNum5 && repeatedNum0 >= repeatedNum6 && repeatedNum0 >= repeatedNum7 && repeatedNum0 >= repeatedNum8 && repeatedNum0 >= repeatedNum9){

                console.log("0 is the biggest: " + repeatedNum0);
                numTable += "<td><b>0</b> is repited <i>" + repeatedNum0 + "</i> times</td></tr>";
        
            }
            else if (repeatedNum1 >= repeatedNum2 && repeatedNum1 >= repeatedNum3 && repeatedNum1 >= repeatedNum4 && repeatedNum1 >= repeatedNum5 && repeatedNum1 >= repeatedNum6 && repeatedNum1 >= repeatedNum7 && repeatedNum1 >= repeatedNum8 && repeatedNum1 >= repeatedNum9){
        
                console.log("1 is the biggest: " + repeatedNum1);
                numTable += "<td><b>1</b> is repited <i>" + repeatedNum1 + "</i> times</td></tr>";
        
            }
            else if (repeatedNum2 >= repeatedNum3 && repeatedNum2 >= repeatedNum4 && repeatedNum2 >= repeatedNum5 && repeatedNum2 >= repeatedNum6 && repeatedNum2 >= repeatedNum7 && repeatedNum2 >= repeatedNum8 && repeatedNum2 >= repeatedNum9){
        
                console.log("2 is the biggest: " + repeatedNum2);
                numTable += "<td><b>2</b> is repited <i>" + repeatedNum2 + "</i> times</td></tr>";
        
            }
            else if (repeatedNum3 >= repeatedNum4 && repeatedNum3 >= repeatedNum5 && repeatedNum3 >= repeatedNum6 && repeatedNum3 >= repeatedNum7 && repeatedNum3 >= repeatedNum8 && repeatedNum3 >= repeatedNum9 ){
        
                console.log("3 This is the biggest: " + repeatedNum3);
                numTable += "<td><b>3</b> is repited <i>" + repeatedNum3 + "</i> times</td></tr>";
        
            }
            else if (repeatedNum4 >= repeatedNum5 && repeatedNum4 >= repeatedNum6 && repeatedNum4 >= repeatedNum7 && repeatedNum4 >= repeatedNum8 && repeatedNum4 >= repeatedNum9){
        
                console.log("4 This is the biggest: " + repeatedNum4);
                numTable += "<td><b>4</b> is repited <i>" + repeatedNum4 + "</i> times</td></tr>";
        
            }
            else if (repeatedNum5 >= repeatedNum6 && repeatedNum5 >= repeatedNum7 && repeatedNum5 >= repeatedNum8 && repeatedNum5 >= repeatedNum9){
        
                console.log("5 This is the biggest: " + repeatedNum5);
                numTable += "<td><b>5</b> is repited <i>" + repeatedNum5 + "</i> times</td></tr>";
                
            }
            else if (repeatedNum6 >= repeatedNum7 && repeatedNum6 >= repeatedNum8 && repeatedNum6 >= repeatedNum9){
        
                console.log("6 This is the biggest: " + repeatedNum6);
                numTable += "<td><b>6</b> is repited <i>" + repeatedNum6 + "</i> times</td></tr>";

                
            }
            else if (repeatedNum7 >= repeatedNum8 && repeatedNum7 >= repeatedNum9){
        
                console.log("7 This is the biggest: " + repeatedNum7);
                numTable += "<td><b>7</b> is repited <i>" + repeatedNum7 + "</i> times</td></tr>";
                
            }
            else if (repeatedNum8 >= repeatedNum9){
        
                console.log("8 This is the biggest: " + repeatedNum8);
                numTable += "<td><b>8</b> is repited <i>" + repeatedNum8 + "</i> times</td></tr>";
                
            }
            else if (repeatedNum9 >= repeatedNum8){
        
                console.log("9 This is the biggest: " + repeatedNum9);
                numTable += "<td><b>9</b> is repited <i>" + repeatedNum9 + "</i> times</td></tr>";
                
            }
        }
        else{
            numTable += "<td> </td></tr>";
        }
    }
    
    


    document.getElementById("randomNumberTable").innerHTML = numTable;

}

randomNumberTable();