

console.log("start");

function myFunction(){

    var hex = "";
    var binary = "";

    for(var number = 1; number <= 255; number++){
       
        hex +=  "<tr><td>" +  number + "<br/></td>" + "<td>" + number.toString(16).toUpperCase() + "</td><tr>";
        binary += "<tr><td>" +  number + "<br/></td>" + "<td>" + (number).toString(2)  + "</td><tr>";
        
        
    }

    document.getElementById("hexNumbers").innerHTML = hex;
    document.getElementById("binaryNumbers").innerHTML = binary;

}

myFunction();


















// console.log("Start");

// function sayBye(name, age, address){


//     console.log("Bye" + name + " age:"+ age + "address:" + address);
//     console.log(v1);
//     v1 = "something else";
//     name = "Holly";
//     console.log("Bye" + name + " age:"+ age + "address:" + address);
//     console.log(v1);

// }

// var v1 = "JOSE";
// var age = 18;
// var address = "57 Crescend, Ajax, Ontario";
// sayBye(v1, age, address );

// console.log(v1);
// console.log(name);

// console.log(
//     "End"
// );

