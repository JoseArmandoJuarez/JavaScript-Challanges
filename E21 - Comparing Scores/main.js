

var aliceArray = [];
var bobArray = [];
var scoreList = [];

function scoreCount(){

    var ranNumAlice = 0;
    var ranNumBob = 0;

    for(var i = 1; i < 4; i++){
        ranNumAlice = Math.floor(Math.random()*5);
        ranNumBob = Math.floor(Math.random()*5);

        console.log("Alice:  " + ranNumAlice);
        console.log("Bob: " + ranNumBob);

        aliceArray.push(ranNumAlice);
        bobArray.push(ranNumBob);
    }

    console.log(aliceArray);
    console.log(bobArray);



    var tiePoint = "Tie";
    var bobPoint = "Bob";
    var alicePoint = "Alice";

    for(i = 0; i < 3; i++){
        if(aliceArray[i] == bobArray[i]){
            scoreList.push(tiePoint);
            console.log("Tie");
        }
        else if(aliceArray[i] < bobArray[i]){
            console.log("Bob: 1");
            scoreList.push(bobPoint);
        }   
        else if(aliceArray[i] > bobArray[i]){
            console.log("Alice: 1");
            scoreList.push(alicePoint);
        }
    }

    console.log(scoreList);


    table = "";
    var length = scoreList.length - 1;

    for(var k = 0; k <= length; k++){
        table += "<tr><th>" + aliceArray[k] + "</th><th>" + bobArray[k] + "</th><td>" + scoreList[k] + "</td></tr>";
    }     

    document.getElementById("scoreTable").innerHTML = table;

}
scoreCount();
