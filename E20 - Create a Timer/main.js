
var time = 16;

var timeLeft = setInterval(function(){

    time = time - 1;
    document.getElementById("countDownTimer").style.color = "green";
    document.getElementById("countDownTimer").innerHTML = "<h1>" + time + "</h1>";

    if(time == 1 || (time > 1 && time <= 5)){
        document.getElementById("countDownTimer").style.color = "red";
        document.getElementById("countDownTimer").innerHTML = "<h1>"+ time +"</h1>";
    }
    else if(time == 0){
        document.getElementById("countDownTimer").style.color = "red";
        document.getElementById("countDownTimer").innerHTML = "<h1> 0 </h1>";

        time = time + 16; 
    }

}, 1000);
