
console.log("start");

function myFunction() {

    var multiples3 = "";
    var multiples5 = "";

    var totalOf3 = 0;
    var totalOf5 = 0;

    for (var i = 3; i < 100; i++) {
        if (i % 3 === 0) {
            multiples3 += "<tr><th>" + i + "</th></tr>";
            totalOf3 += i;
        }
        if (i % 5 === 0) {
            multiples5 += "<tr><th>" + i + "</th></tr>";
            totalOf5 += i;
        }
    }

    var total = totalOf3 + totalOf5;

    document.getElementById("multiples3").innerHTML = multiples3 + "<tr><th> <b>Total: " + totalOf3 + "</th></tr>";
    document.getElementById("multiples5").innerHTML = multiples5 + "<tr><th> <b>Total: " + totalOf5 + "</th></tr>";

    document.getElementById("total").innerHTML = "<p> <b>Total of both multiples of 3 and 5 = " + total + "</p>";
}

myFunction();