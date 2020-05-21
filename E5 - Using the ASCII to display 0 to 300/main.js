
console.log("start");

function myFunction() {
	var ascii = "";

	for(var i = 0; i <= 225; i++){
        ascii += "<tr><th>" + i + " = " + String.fromCharCode(i)  + "<br/></th></tr>";
    }

    console.log(ascii);

  document.getElementById("codeNumbers").innerHTML = ascii;
}

myFunction();