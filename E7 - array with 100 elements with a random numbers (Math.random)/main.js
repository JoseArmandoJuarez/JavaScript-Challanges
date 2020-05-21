
console.log("my call");
var myRandomNumbersArray = [];



function displayNumber(){
    
    var ranNum = 0;

    console.log(myRandomNumbersArray);

    for(var i = 1; i < 101; i++){
        ranNum = Math.floor(Math.random() * 101);

        console.log("number : " + ranNum);
       
        myRandomNumbersArray.push(ranNum);
    }

    console.log("My array " + myRandomNumbersArray);



    myRandomNumbersArray.sort();

    var numTable = "";
    for(var j = 0; j < myRandomNumbersArray.length; j++){
        
        numTable += "<tr><td>" + myRandomNumbersArray[j] + "</td></tr>";

        console.log(myRandomNumbersArray[j]);

    }
    document.getElementById("randomNumbers").innerHTML = numTable ;

    console.log(myRandomNumbersArray);
}


displayNumber();