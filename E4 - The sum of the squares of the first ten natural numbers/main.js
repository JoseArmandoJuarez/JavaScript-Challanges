
console.log("Start");
function myFunction() {

    var sumOfTheSquares = "";
    var squaresSum = "";

    totalSum = 0;
    totalSquare = 0; 

    for(var i = 1; i <= 10; i++){
  
        sumOfTheSquares += "<tr><th>" + i + "^2 = " + Math.pow(i, 2) +"</th></tr>";
        squaresSum += "<tr><th>" + i + "</th></tr>" ;

        totalSum += Math.pow(i, 2);
        totalSquare += i; 
        
    }
    document.getElementById("sumOfTheSquares").innerHTML = sumOfTheSquares + "<tr><th>The total sum is = " + totalSum + "</th></tr>";

    
    document.getElementById("squaresSum").innerHTML = squaresSum + "<tr><th>Total = " + totalSquare +"</th></tr>" + 
                                                                    "<tr><th>"+ totalSquare + "^2 = " + Math.pow(totalSquare, 2); + "</th></tr>";
    
}

myFunction();