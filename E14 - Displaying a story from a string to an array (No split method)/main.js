
/* 
    1. create empty array
    2. write a loop to go thru array
    3. make a word
    4. push word in array
    5. display array in console i.e. console.log(storyArray)
    6. display in browser
*/



var story = "Once upon a time there lived a crow. She had built her nest on a tree. At the root of the same tree, a snake had built its home. "+ 
"Whenever the crow laid eggs, the snake would eat them up. The crow felt helpless. That evil snake. I must do something. Let me go and talk to him, thought the crow. "+ 
"The next morning, the crow went to the snake and said politely: Please spare my eggs, dear friend. Let us live like good neighbors and not disturb each other."+ 
"Huh! You cannot expect me to go hungry. Eggs are what I eat, replied the snake, in a nasty tone. "+ 
"The crow felt angry and she thought, I must teach that snake a lesson. "+ 
"The very next day, the crow was flying over the Kings palace. She saw the Princess wearing an expensive necklace. Suddenly a thought flashed in her mind and she swooped down, picked up the necklace in her beak and flew off to her nest. "+ 
"When the Princess saw the crow flying off with her necklace, she screamed, Somebody help, the crow has taken my necklace. "+ 
"Soon the palace guards were running around in search of the necklace. Within a short time the guards found the crow. She still sat with the necklace hanging from her beak. "+ 
"The clever crow thought, Now is the time to act. And she dropped the necklace, which fell right into the snake’s pit of house. "+ 
"When the snake heard the noise, it came out of its pit of house. The palace guards saw the snake. A snake! Kill it! they shouted. With big sticks, they beat the snake and killed it. "+ 
"Then the guards took the necklace and went back to the princess. The crow was happy, Now my eggs will be safe, she thought and led a happy and peaceful life."

//var story = "Once upon a time there lived a crow. More stuff";

console.log("Before the array: \n" + story );

var storyArray = [];


function storyTelling(){
    
    var word = ""; //keeps in memory the word

    var lastIndex = story.length - 1; // keeps the index of the story array

    for (var i = 0; i < story.length; i++){
        // ! == NOT
        // IF NOT  (TRUE)
        // IF NOT => story[i] == "." || story[i] == "," || story[i] == ":" || story[i] == ";" || story[i] == "!"

        if ( !(story[i] == "." || story[i] == "," || story[i] == ":" || story[i] == ";" || story[i] == "!") ) {

            word = word + story[i]; //adds a letter to the variable word

            console.log(word); //displays word in console

        }        


        if (story[i] == " "){ //checks if there is a space in the string if there is it enters

           word = word.trim(); //trims the word if there is a space

            storyArray.push(word); //pushes the word to a new empty array 

            word = ""; //resets the variable word
        }
        else if(i == lastIndex){ //compare the current index to the last index of the string if yes it enters

            storyArray.push(word); //pushes last word to story array
        }
    
    }

    console.log(storyArray); //displays the new array in storyArray



    var storyTime = "";

    var index = storyArray.length - 1;
    for (var j = 0; j < storyArray.length; j++){

        if(j <= index){
        storyTime += "<p>" + storyArray[j] + "</p>";
        }
    }

    console.log(storyTime);

    document.getElementById("story").innerHTML = storyTime;


}

storyTelling();



// storyArray.push(word)

