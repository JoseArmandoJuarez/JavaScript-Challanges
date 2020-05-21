
console.log("START");

var myArray = [];


function myFunction(){

    var ranNum = 0;

    console.log(myArray);

    for(var i = 1; i < 10; i++){
        ranNum = Math.floor(Math.random()*10);

        console.log("Numbers:  " + ranNum);

        myArray.push(ranNum);
    }

    console.log(myArray);

    
 
    
    var numTable = "";

    var minNumber = myArray[0];
    var maxNumber = myArray[0];
    for(var j = 0; j < myArray.length; j++){
        
        numTable += "<tr><td>" + myArray[j] + "</td></tr>";

        if (myArray[j] < minNumber){
            minNumber = myArray[j];

            console.log("smallest: " + myArray[j]);
        }
        
        
        if (maxNumber < myArray[j]){
            maxNumber = myArray[j];
            console.log("biggest: " + myArray[j]);
        }
        
        console.log(myArray[j]);
    
    }


    document.getElementById("randomNumbers").innerHTML = numTable + 
                                                        "<tr><td>The smallest Number is: " + minNumber + "</td>" + 
                                                        "<td> The biggest Number is: " + maxNumber + "</td></tr>";

}

myFunction();