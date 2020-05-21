/* 
    1. create an array with 10 names
    2. create an array with 10 last names
    3. create an empty array (name of array is fullNames)
    4. generate 100 names using a for loop
        4.1 - generate a random number from 0 to 9 to fetch names
        4.2 - generate a random number from 0 to 9 to fetch last names
        4.3 - concatenate the random name and the random last name into a new string called fullName. Ex - "Jose Juarez"
        4.4 - push the name into fullNames
    5. Sort fullNames array 
    6. Remove duplicates
    7. display names in the browser
*/

var names = ['Jose', 'Peter', 'Jonah', 'Willy', 'Emma', 'Bruce', 'John', 'David', 'Dmitri', 'Casey'];

var lastNames = ['Juarez', 'Mckinnon', 'Hill', 'Wanka', 'Watson', 'Willis', 'Stamos', 'Dobrick', 'Shostakovich', 'Neistat'];

var fullNames = [];

function namesGenerator(){

    var randNames = 0;
    var randLastNames = 0;
    for (var i = 0; i < 101; i++){
        randNames = Math.floor(Math.random()*10);
        randLastNames = Math.floor(Math.random()*10);

 

        var guessedName = names[randNames];
        var guessedLastName = lastNames[randLastNames];
        
        console.log("name: " + guessedName);
        console.log("Last name: " + guessedLastName);

        var fullName = guessedName.concat(" ").concat(guessedLastName);
        //var fullName = guessedName + " " +guessedLastName;

        console.log("Full Name: " + fullName);

        fullNames.push(fullName);
    }

    fullNames.sort();

    console.log("Names Before: " + fullNames);




    var k = 0;
    
    while(k < fullNames.length){
        if (fullNames[k] == fullNames[k+1]){
            fullNames.splice(k, 1);
        }
        else{
            k++;
        }
    }

    console.log("Names After: " + fullNames);

    


    fullNamesTable = "";
    for(var j = 0; j < fullNames.length; j++){
        fullNamesTable += "<tr><td>" + fullNames[j] + "</td>";
    }
    
    console.log(fullNames);

    document.getElementById("Names").innerHTML = fullNamesTable;
}

namesGenerator();
