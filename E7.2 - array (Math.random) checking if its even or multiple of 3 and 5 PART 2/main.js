
console.log("my call");
var myRandomNumbersArray = [];



function displayNumber(){
    
    var ranNum = 0;

    console.log(myRandomNumbersArray);

    for(var i = 0; i < 101; i++){
        ranNum = Math.floor(Math.random() * 101);

        console.log("number : " + ranNum);
       
        myRandomNumbersArray.push(ranNum);
    }

    console.log("My array " + myRandomNumbersArray);



    myRandomNumbersArray.sort();

    
    
    var numTable = "";


    for(var j = 0; j < myRandomNumbersArray.length; j++){

        var isEven = false;
        if(myRandomNumbersArray[j]% 2 === 0){
            isEven = true;
            console.log("Ites even: " + myRandomNumbersArray[j]);
        }
        else{
            isEven = false;
            console.log("Not EVEN: " + myRandomNumbersArray[j]);
        }


        if(isEven){
            numTable +=  "<tr><td>" + myRandomNumbersArray[j] + "</td><td>EVEN!!</td>";
        }
        else{
            numTable += "<tr><td>" + myRandomNumbersArray[j] + "</td><td>UNEVEN!!</td>";
        }



        if(myRandomNumbersArray[j]% 3 === 0){
            numTable += "<td>Multiple of 3</td></tr>";
            console.log("its a multiple of 3: " + myRandomNumbersArray[j]);
        }
        else if(myRandomNumbersArray[j]% 5 === 0){
            numTable += "<td>Multiple of 5</td></tr>";
            console.log("Its a multiple of 5: " + myRandomNumbersArray[j]);
        }
        else{
            numTable += "<td> --- </td></tr>";
            console.log("--");
        }
        

    }


    document.getElementById("randomNumbers").innerHTML = numTable;

    console.log(myRandomNumbersArray);
}


displayNumber();