

function myFunction() {
    
    var multiplesOf3 = "";

    var total = 0;
    

    for (var i = 3; i <= 10; i+=3) {
        
        multiplesOf3 +=  "<tr><th>" + i + "</th></tr>";

        total += i;
    }

    document.getElementById("multiplesOf3").innerHTML = multiplesOf3 + "<tr><th> <b>Total: " + total + "</th></tr>";
}

myFunction();




function myFunction1() {
    
    var multiplesOf5 = "";

    var total = 0;

    for (var i = 5; i < 10; i+=5) {
      multiplesOf5 +=  "<tr><th>" + i + "</th></tr>";

      total += i;
    }
    document.getElementById("multiplesOf5").innerHTML = multiplesOf5 + "<tr><th> <b>Total: " + total + "</th></tr>";
}

myFunction1();



