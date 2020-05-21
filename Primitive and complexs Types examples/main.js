
/*
Primitive Types:
boolean
string
Number
Null
undefined

Complex Types:
{
    property1: value
    ....
    ....
    ....
}
*/


var test = {};

//example holds the same values as test
var example = test;

example.color = "blue";
console.log(example);
//output example = {color: "blue"}
console.log(test);
//output test = {color: "blue"}


test.wheels = 4;
console.log(test);
//output test = {color: "blue", wheels: 4}
console.log(example);
//output example = {color: "blue", wheels: 4}


//********************************************
//TO CHANGE THE VALUE OF COLOR USING A FUCTION
//********************************************

test.changeColor = function(newColor){
                        this.color = newColor;
                    }


console.log(test.changeColor);

console.log(test);
//output test = {color: "blue", wheels: 4, changeColor: f}

console.log(example);
//output example = {color: "blue", wheels: 4, changeColor: f}

test.changeColor("red");
console.log(test);
//output test = {color: "red", wheels: 4, changeColor: f}
console.log(example);
//output example = {color: "red", wheels: 4, changeColor: f}


//AN EASIER WAY TO CHANGE THE COLOR...
test.color = "green";
console.log(test);
//output test = {color: "green", wheels: 4, changeColor: f}
console.log(example);
//output example = {color: "green", wheels: 4, changeColor: f}





//***************************************************************
//CHANCHING THE VALUE OF WHEELS AND DISPLAYING IF ITS EVEN OR NOT
//***************************************************************

example.changeWheels = function(numberOfWheels){
                            this.wheels = numberOfWheels;
                        }

example.changeWheels(5);
console.log(example);
//output example = {color: "green", wheels: 5, changeColor: f, changeWheels: f}
console.log(test);
//output test = {color: "green", wheels: 5, changeColor: f, changeWheels: f}

//CHECKING IF numberOfWheels is even or not
//*****************************************

example.changeWheels = function(numberOfWheels){
                            if(numberOfWheels%2 != 0){
                                console.log("invalid number of wheels");
                            }else{
                                this.wheels = numberOfWheels;
                            }
                        }

example.changeWheels(5);
//output: invalid number of wheels
//output: undefined
console.log(example);
//output: example = {color: "green", wheels: null, changeColor: f, changeWheels: f}

example.changeWheels(8);
console.log(example);
//output: example = {color: "green", wheels: 8, changeColor: f, changeWheels: f}