function wordCounter(param1){

    param1 = param1.trim();

    var count = 0;
    for (var y = 0; y < param1.length; y++){

        if(" " == param1[y]){

            count = count + 1;
            
        }
    }

    return count + 1;

}

var myString = "My name is Jose";
var wordCounted = wordCounter(myString);
console.log("There are: " + wordCounted + " words");

var wordCounted2 = wordCounter("Hello this is a test for Jose ");

console.log("There are " + wordCounted2 + " words");