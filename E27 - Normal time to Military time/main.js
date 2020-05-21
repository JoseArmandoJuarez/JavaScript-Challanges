

function timeConvertion(s){

    var amTime = s;

    var PM = s.match('PM') ? true : false
    
    time = s.split(':')
    console.log(time);

    var hr = time[0];
    console.log("hr: " + hr);

    var min = time[1];
    console.log("min: " + min);

    var sec = time[2];
    console.log("Sec: " + sec);

    
    if (PM) {
        var hour = 12 + parseInt(time[0]);
        
        console.log(hour + ':' + min + ':' + sec);

    } else {
        console.log(amTime);  
    }

}
timeConvertion('7:05:45PM');
// timeConvertion('7:05:45AM');