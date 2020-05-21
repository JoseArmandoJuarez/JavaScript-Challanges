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

    colorTable = "";
    for(var j = 0; j < randColors.length; j++){
        colorTable += "<tr><td>" + randColors[j] + "</td>";

        if (j <= 9){
            if (j == 0){
                colorTable += "<td>" + colors[j] + " = " + yellowCounter + "</td></tr>";
            }
            else if (j == 1){
                colorTable += "<td>" + colors[j] + " = " + redCounter + "</td></tr>";
            }
            else if (j == 2){
                colorTable += "<td>" + colors[j] + " = " + blueCounter + "</td></tr>";
            }
            else if (j == 3){
                colorTable += "<td>" + colors[j] + " = " + greenCounter + "</td></tr>";
            }
            else if (j == 4){
                colorTable += "<td>" + colors[j] + " = " + orangeCounter + "</td></tr>";
            }
            else if (j == 5){
                colorTable += "<td>" + colors[j] + " = " + pinkCounter + "</td></tr>";
            }
            else if (j == 6){
                colorTable += "<td>" + colors[j] + " = " + brownCounter + "</td></tr>";
            }
            else if (j == 7){
                colorTable += "<td>" + colors[j] + " = " + whiteCounter + "</td></tr>"; 
            }
            else if (j == 8){
                colorTable += "<td>" + colors[j] + " = " + greyCounter + "</td></tr>";
            }
            else if (j == 9){
                colorTable += "<td>" + colors[j] + " = " + blackCounter + "</td></tr>";
            }
        }
        else{
            colorTable += "<td>...</td></tr>";
        }
        
    }

    console.log(randColors);

    console.log(colors);

    document.getElementById("colorTable").innerHTML = colorTable;
}

myFunction();