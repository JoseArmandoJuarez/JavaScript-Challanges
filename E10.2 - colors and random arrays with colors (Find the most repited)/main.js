/*
    1. create an array with 10 colors
    2. create an empty array
    3. write a for loop with 100 iterations
        3.1 - generate a random number between 0 and 9 and use the number 
                generated to fetch one of the colors in the colors array.
        3.2 - use the random color to push in the empty array 
    4. Display the colors and the random colors
        4.1 - count each color generated in randColors
*/

var colors = ['yellow', 'red', 'blue', 'green', 'orange', 'pink', 'brown', 'white', 'grey', 'black'];

var randColors = [];


function myFunction(){
    var randNumber = 0;

    for(var i = 0; i < 101; i++){
        randNumber = Math.floor(Math.random()*10);

        console.log("random Number");

        var guessedColor = colors[randNumber]; 
        console.log(guessedColor);

        randColors.push(guessedColor);
    }


    var yellowCounter = 0;
    var redCounter = 0;
    var blueCounter = 0;
    var greenCounter = 0;
    var orangeCounter = 0;
    var pinkCounter = 0;
    var brownCounter = 0;
    var whiteCounter = 0;
    var greyCounter = 0;
    var blackCounter = 0;

    for(var k = 0; k < randColors.length; k++){
        if (randColors[k] == colors[0]){
            yellowCounter = yellowCounter + 1;
        }
        else if (randColors[k] == colors[1]){
            redCounter = redCounter + 1;
        }
        else if (randColors[k] == colors[2]){
            blueCounter = blueCounter + 1;
        }
        else if (randColors[k] == colors[3]){
            greenCounter = greenCounter + 1;
        }
        else if (randColors[k] == colors[4]){
            orangeCounter = orangeCounter + 1;
        }
        else if (randColors[k] == colors[5]){
            pinkCounter = pinkCounter + 1;
        }
        else if (randColors[k] == colors[6]){
            brownCounter = brownCounter + 1;
        }
        else if (randColors[k] == colors[7]){
            whiteCounter = whiteCounter + 1;
        }
        else if (randColors[k] == colors[8]){
            greyCounter = greyCounter + 1;
        }
        else if (randColors[k] == colors[9]){
            blackCounter = blackCounter + 1;
        }
    }

    console.log("yellow is repited: " + yellowCounter);
    console.log("red is repited: " + redCounter);
    console.log("blue is repited: " + blueCounter);
    console.log("green is repited: " + greenCounter);
    console.log("orange is repited: " + orangeCounter);
    console.log("pink is repited: " + pinkCounter);
    console.log("brown is repited: " + brownCounter);
    console.log("white is repited: " + whiteCounter);
    console.log("grey is repited: " + greyCounter);
    console.log("black is repited: " + blackCounter);



    colorTable = "";
    for(var j = 0; j < randColors.length; j++){
        colorTable += "<tr><td>" + randColors[j] + "</td>";

        if (j <= 9){
            if (j == 0){
                colorTable += "<td>" + colors[j] + " = " + yellowCounter + "</td>";
            }
            else if (j == 1){
                colorTable += "<td>" + colors[j] + " = " + redCounter + "</td>";
            }
            else if (j == 2){
                colorTable += "<td>" + colors[j] + " = " + blueCounter + "</td>";
            }
            else if (j == 3){
                colorTable += "<td>" + colors[j] + " = " + greenCounter + "</td>";
            }
            else if (j == 4){
                colorTable += "<td>" + colors[j] + " = " + orangeCounter + "</td>";
            }
            else if (j == 5){
                colorTable += "<td>" + colors[j] + " = " + pinkCounter + "</td>";
            }
            else if (j == 6){
                colorTable += "<td>" + colors[j] + " = " + brownCounter + "</td>";
            }
            else if (j == 7){
                colorTable += "<td>" + colors[j] + " = " + whiteCounter + "</td>"; 
            }
            else if (j == 8){
                colorTable += "<td>" + colors[j] + " = " + greyCounter + "</td>";
            }
            else if (j == 9){
                colorTable += "<td>" + colors[j] + " = " + blackCounter + "</td>";
            }
        }
        else{
            colorTable += "<td> <td>";
        }



        if (j <= 0){
            if (yellowCounter >= redCounter && yellowCounter >= blueCounter && yellowCounter >= greenCounter && yellowCounter >= orangeCounter && yellowCounter >= pinkCounter && yellowCounter >= brownCounter && yellowCounter >= whiteCounter && yellowCounter >= greyCounter && yellowCounter >= blackCounter){
                console.log("Yellow is the most repited = " + yellowCounter);
                colorTable += "<td><b>Yellow</b> is repited " + yellowCounter + "x</td></tr>";
            } 
            else if (redCounter >= blueCounter && redCounter >= greenCounter && redCounter >= orangeCounter && redCounter >= pinkCounter && redCounter >= brownCounter && redCounter >= whiteCounter && redCounter >= greyCounter && redCounter >= blackCounter){
                console.log("Red is the most repited = " + redCounter);
                colorTable += "<td><b>Red</b> is repited " + redCounter + "x</td></tr>";
            }
            else if (blueCounter >= greenCounter && blueCounter >= orangeCounter && blueCounter >= pinkCounter && blueCounter >= brownCounter && blueCounter >= whiteCounter && blueCounter >= greyCounter && blueCounter >= blackCounter){
                console.log("Blue is the most repited = " + blueCounter);
                colorTable += "<td><b>Blue</b> is repited " + blueCounter + "x</td></tr>";
            }
            else if (greenCounter >= orangeCounter && greenCounter >= pinkCounter && greenCounter >= brownCounter && greenCounter >= whiteCounter && greenCounter >= greyCounter && greenCounter >= blackCounter){
                console.log("Green is the most repited = " + greenCounter);
                colorTable += "<td><b>Green</b> is repited " + greenCounter + "x</td></tr>";
            }
            else if (orangeCounter  >= pinkCounter && orangeCounter >= brownCounter && orangeCounter >= whiteCounter && orangeCounter >= greyCounter && orangeCounter >= blackCounter){
                console.log("Orange is the most repited = " + orangeCounter);
                colorTable += "<td><b>Orange</b> is repited " + orangeCounter + "x</td></tr>";
            }
            else if (pinkCounter >= brownCounter && pinkCounter >= whiteCounter && pinkCounter >= greyCounter && pinkCounter >= blackCounter){
                console.log("Pink is the most repited = " + pinkCounter);
                colorTable += "<td><b>Pink</b> is repited " + pinkCounter + "x</td></tr>";
            }
            else if (brownCounter >= whiteCounter && brownCounter >= greyCounter && brownCounter >= blackCounter){
                console.log("Brown is the most repited = " + brownCounter);
                colorTable += "<td><b>Brown</b> is repited " + brownCounter + "x</td></tr>";
            }
            else if (whiteCounter >= greyCounter && whiteCounter >= blackCounter){
                console.log("White is the most repited = " + whiteCounter);
                colorTable += "<td><b>White</b> is repited " + whiteCounter + "x</td></tr>";
            }
            else if (greyCounter >= blackCounter){
                console.log("Grey is the most repited = " + greyCounter);
                colorTable += "<td><b>Grey</b> is repited " + greyCounter + "x</td></tr>";
            }
            else if (blackCounter >= greyCounter){
                console.log("Black is the most repited = " + blackCounter);
                colorTable += "<td><b>Black</b> is repited " + blackCounter + "x</td></tr>";
            }
        }
        else{
            colorTable += "<td></td></tr>";
        }
    }


    document.getElementById("colorTable").innerHTML = colorTable;
}

myFunction();