/**
 *  1. create 5 empty arrays
 *  2. use only 1 for loop
 *  3. numbers from 1 to 100 (0 - 99)
 *  4. one array has to have only the multiples of 2 to 100
 *      the other only multiples of 3 to 100
 *      the other only multiples of 4 to 100
 *      the other only multiples of 5 to 100
 *      and the last one only multiples of 6 to 100
 *  6. display in console
 */


 var multiplesOf2Array = [];
 var multiplesOf3Array = [];
 var multiplesOf4Array = [];
 var multiplesOf5Array = [];
 var multiplesOf6Array = [];


 function multiples(){

    var multipleOf2 = 0;
    var multipleOf3 = 0;
    var multipleOf4 = 0;
    var multipleOf5 = 0;
    var multipleOf6 = 0;

    for (var i = 0; i < 100; i++){

        if(i < 100){
            
            multipleOf2 = i * 2;
            multiplesOf2Array.push(multipleOf2);
            multipleOf2 = 0;

            multipleOf3 = i * 3;
            multiplesOf3Array.push(multipleOf3);
            multipleOf3 = 0;

            multipleOf4 = i * 4;
            multiplesOf4Array.push(multipleOf4);
            multipleOf4 = 0;

            multipleOf5 = i * 5;
            multiplesOf5Array.push(multipleOf5);
            multipleOf5 = 0;

            multipleOf6 = i * 6;
            multiplesOf6Array.push(multipleOf6);
            multipleOf6 = 0;
        }

    }

    console.log(multiplesOf2Array);
    console.log(multiplesOf3Array);
    console.log(multiplesOf4Array);
    console.log(multiplesOf5Array);
    console.log(multiplesOf6Array);

 }

 multiples();