
function valueInLetters(number){

    var numStr = number.toString();
    var lengthNum = numStr.length;
    console.log("length of number: " + lengthNum);

    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
                
    var tents = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(isNaN(number)){
        return "This is Not a valid Number please try again!"
    }

    if(number >= 0 && number <= 19){
        return units[numStr]
    }

    var newNumUnit = "";
    var newNumTent = "";
    var newNumHundred = "";
    var newThousand = "";
    var newdblTho = "";
    var newdblTho2 = "";
    var newHunTho = "";


    if (lengthNum == 2){
        
        var str = numStr;
        var check = str.split("");
        console.log(check);

        for(var i = 0; i < check.length; i++){
            //Checking the tents
            if(check[0] == 2){ newNumTent = tents[0]; }
            if(check[0] == 3){ newNumTent = tents[1]; }
            if(check[0] == 4){ newNumTent = tents[2]; }
            if(check[0] == 5){ newNumTent = tents[3]; }
            if(check[0] == 6){ newNumTent = tents[4]; }
            if(check[0] == 7){ newNumTent = tents[5]; }
            if(check[0] == 8){ newNumTent = tents[6]; }
            if(check[0] == 9){ newNumTent = tents[7]; }

            //checking the ones
            if(check[1] == 0){ newNumUnit = units[0]; }
            if(check[1] == 1){ newNumUnit = units[1]; }
            if(check[1] == 2){ newNumUnit = units[2]; }
            if(check[1] == 3){ newNumUnit = units[3]; }
            if(check[1] == 4){ newNumUnit = units[4]; }
            if(check[1] == 5){ newNumUnit = units[5]; }
            if(check[1] == 6){ newNumUnit = units[6]; }
            if(check[1] == 7){ newNumUnit = units[7]; }
            if(check[1] == 8){ newNumUnit = units[8]; }
            if(check[1] == 9){ newNumUnit = units[9]; }
        }

        var numInLetters = newNumTent.concat(newNumUnit);
        console.log(numInLetters);
        return numInLetters
    }


    //Enter if the numbers length is 3
    if (lengthNum == 3){
        
        var str = numStr;
        console.log("str: " + numStr);
        var check = str.split("");
        console.log(check);

        for(var i = 0; i < check.length; i++){

            if(numStr == 100 || numStr == 200 || numStr == 300 || numStr == 400 || numStr == 500 || numStr == 600||numStr == 700||numStr == 800||numStr == 900){
                if(check[0] == 1){ newNumHundred = units[1] + " hundred";}
                if(check[0] == 2){ newNumHundred = units[2] + " hundred";}
                if(check[0] == 3){ newNumHundred = units[3] + " hundred";}
                if(check[0] == 4){ newNumHundred = units[4] + " hundred";}
                if(check[0] == 5){ newNumHundred = units[5] + " hundred";}
                if(check[0] == 6){ newNumHundred = units[6] + " hundred";}
                if(check[0] == 7){ newNumHundred = units[7] + " hundred";}
                if(check[0] == 8){ newNumHundred = units[8] + " hundred";}
                if(check[0] == 9){ newNumHundred = units[9] + " hundred";}
                return newNumHundred;
            }

            if(check[0] == 1){ newNumHundred = units[1] + " hundred "; }
            if(check[0] == 2){ newNumHundred = units[2] + " hundred "; }
            if(check[0] == 3){ newNumHundred = units[3] + " hundred "; }
            if(check[0] == 4){ newNumHundred = units[4] + " hundred "; }
            if(check[0] == 5){ newNumHundred = units[5] + " hundred "; }
            if(check[0] == 6){ newNumHundred = units[6] + " hundred "; }
            if(check[0] == 7){ newNumHundred = units[7] + " hundred "; }
            if(check[0] == 8){ newNumHundred = units[8] + " hundred "; }
            if(check[0] == 9){ newNumHundred = units[9] + " hundred "; }

            //Checking the tents
            if(check[1] == 1){

                var newDbl = check[1].concat(check[2])
                console.log(newDbl);
                
                if(newDbl >= 10 && newDbl <= 19){
                    newNumTent = units[newDbl];
                }

                var newNumLetter = newNumHundred.concat(newNumTent);
                return newNumLetter;

            }

            if(check[1] == 2){ newNumTent = tents[0]; }
            if(check[1] == 3){ newNumTent = tents[1]; }
            if(check[1] == 4){ newNumTent = tents[2]; }
            if(check[1] == 5){ newNumTent = tents[3]; }
            if(check[1] == 6){ newNumTent = tents[4]; }
            if(check[1] == 7){ newNumTent = tents[5]; }
            if(check[1] == 8){ newNumTent = tents[6]; }
            if(check[1] == 9){ newNumTent = tents[7]; }

            if(check[2] == 0){ newNumUnit = units[0]; }
            if(check[2] == 1 ){ newNumUnit = units[1]; }
            if(check[2] == 2 ){ newNumUnit = units[2]; }
            if(check[2] == 3 ){ newNumUnit = units[3]; }
            if(check[2] == 4 ){ newNumUnit = units[4]; }
            if(check[2] == 5 ){ newNumUnit = units[5]; }
            if(check[2] == 6 ){ newNumUnit = units[6]; }
            if(check[2] == 7 ){ newNumUnit = units[7]; }
            if(check[2] == 8 ){ newNumUnit = units[8]; }
            if(check[2] == 9 ){ newNumUnit = units[9]; }

        }

        var numInLetters = newNumHundred.concat(newNumTent, newNumUnit);
        return numInLetters;
    }



    //Enter if the length of the number is 4
    if (lengthNum == 4){
        
        var str = numStr;
        console.log("str: " + numStr);
        var check = str.split("");
        console.log(check);

        for(var i = 0; i < check.length; i++){

            if(numStr == 1000 || numStr == 2000 || numStr == 3000 || numStr == 4000 || numStr == 5000 || numStr == 6000 ||numStr == 7000 ||numStr == 8000 ||numStr == 9000 ){
                if(check[0] == 1){ newThousand = units[1] + " Thousand";}
                if(check[0] == 2){ newThousand = units[2] + " Thousand";}
                if(check[0] == 3){ newThousand = units[3] + " Thousand";}
                if(check[0] == 4){ newThousand = units[4] + " Thousand";}
                if(check[0] == 5){ newThousand = units[5] + " Thousand";}
                if(check[0] == 6){ newThousand = units[6] + " Thousand";}
                if(check[0] == 7){ newThousand = units[7] + " Thousand";}
                if(check[0] == 8){ newThousand = units[8] + " Thousand";}
                if(check[0] == 9){ newThousand = units[9] + " Thousand";}
                return newThousand;
            }

            if(check[0] == 1){ newThousand = units[1] + " thousand "; }
            if(check[0] == 2){ newThousand = units[2] + " thousand "; }
            if(check[0] == 3){ newThousand = units[3] + " thousand "; }
            if(check[0] == 4){ newThousand = units[4] + " thousand "; }
            if(check[0] == 5){ newThousand = units[5] + " thousand "; }
            if(check[0] == 6){ newThousand = units[6] + " thousand "; }
            if(check[0] == 7){ newThousand = units[7] + " thousand "; }
            if(check[0] == 8){ newThousand = units[8] + " thousand "; }
            if(check[0] == 9){ newThousand = units[9] + " thousand "; }

            if(check[1] == 1){ newNumHundred = units[1] + " hundred "; }
            if(check[1] == 2){ newNumHundred = units[2] + " hundred "; }
            if(check[1] == 3){ newNumHundred = units[3] + " hundred "; }
            if(check[1] == 4){ newNumHundred = units[4] + " hundred "; }
            if(check[1] == 5){ newNumHundred = units[5] + " hundred "; }
            if(check[1] == 6){ newNumHundred = units[6] + " hundred "; }
            if(check[1] == 7){ newNumHundred = units[7] + " hundred "; }
            if(check[1] == 8){ newNumHundred = units[8] + " hundred "; }
            if(check[1] == 9){ newNumHundred = units[9] + " hundred "; }

            //Checking the tents
            if(check[2] == 1){

                var newDbl = check[2].concat(check[3])
                console.log(newDbl);
                
                if(newDbl >= 10 && newDbl <= 19){
                    newNumTent = units[newDbl];
                }

                var newNumLetter = newThousand.concat(newNumHundred, newNumTent);
                return newNumLetter;

            }

            if(check[2] == 2){ newNumTent = tents[0]; }
            if(check[2] == 3){ newNumTent = tents[1]; }
            if(check[2] == 4){ newNumTent = tents[2]; }
            if(check[2] == 5){ newNumTent = tents[3]; }
            if(check[2] == 6){ newNumTent = tents[4]; }
            if(check[2] == 7){ newNumTent = tents[5]; }
            if(check[2] == 8){ newNumTent = tents[6]; }
            if(check[2] == 9){ newNumTent = tents[7]; }

            if(check[3] == 0){ newNumUnit = units[0]; }
            if(check[3] == 1 ){ newNumUnit = units[1]; }
            if(check[3] == 2 ){ newNumUnit = units[2]; }
            if(check[3] == 3 ){ newNumUnit = units[3]; }
            if(check[3] == 4 ){ newNumUnit = units[4]; }
            if(check[3] == 5 ){ newNumUnit = units[5]; }
            if(check[3] == 6 ){ newNumUnit = units[6]; }
            if(check[3] == 7 ){ newNumUnit = units[7]; }
            if(check[3] == 8 ){ newNumUnit = units[8]; }
            if(check[3] == 9 ){ newNumUnit = units[9]; }

        }

        var numInLetters = newThousand.concat(newNumHundred, newNumTent, newNumUnit);
        return numInLetters;
    }





    if (lengthNum == 5){
        
        var str = numStr;
        console.log("str: " + numStr);
        var check = str.split("");
        console.log(check);


        for(var i = 0; i < check.length; i++){

            if(numStr == 10000 || numStr == 20000 || numStr == 30000 || numStr == 40000 || numStr == 50000 || numStr == 60000 || numStr == 70000 || numStr == 80000 || numStr == 90000 ){
                if(check[0] == 1){ newdblTho = units[10] + " Thousand"; }
                if(check[0] == 2){ newdblTho = tents[0] + " Thousand"; }
                if(check[0] == 3){ newdblTho = tents[1] + " Thousand"; }
                if(check[0] == 4){ newdblTho = tents[2] + " Thousand"; }
                if(check[0] == 5){ newdblTho = tents[3] + " Thousand"; }
                if(check[0] == 6){ newdblTho = tents[4] + " Thousand"; }
                if(check[0] == 7){ newdblTho = tents[5] + " Thousand"; }
                if(check[0] == 8){ newdblTho = tents[6] + " Thousand"; }
                if(check[0] == 9){ newdblTho = tents[7] + " Thousand"; }

                return newdblTho;

            }

            if(check[0] == 1){
                var newdDubleTh = check[0].concat(check[1])
                console.log(newdDubleTh);
                
                if(newdDubleTh >= 10 && newdDubleTh <= 19){
                    newdblTho = units[newdDubleTh] + " thousand ";

                    if(check[2] == 0 && check[3] == 0 && check[4] == 0){
                        return newdblTho
                    }
                }

            }


            if(check[0] >= 2 && check[0] <= 9){
                
                if(check[0] == 2){ newdblTho = tents[0]; }
                if(check[0] == 3){ newdblTho = tents[1]; }
                if(check[0] == 4){ newdblTho = tents[2]; }
                if(check[0] == 5){ newdblTho = tents[3]; }
                if(check[0] == 6){ newdblTho = tents[4]; }
                if(check[0] == 7){ newdblTho = tents[5]; }
                if(check[0] == 8){ newdblTho = tents[6]; }
                if(check[0] == 9){ newdblTho = tents[7]; }

                if(check[1] == 0){ newdblTho2 = " thousand";}
                if(check[1] == 1){ newdblTho2 = units[1] + " thousand "; }
                if(check[1] == 2){ newdblTho2 = units[2] + " thousand "; }
                if(check[1] == 3){ newdblTho2 = units[3] + " thousand "; }
                if(check[1] == 4){ newdblTho2 = units[4] + " thousand "; }
                if(check[1] == 5){ newdblTho2 = units[5] + " thousand "; }
                if(check[1] == 6){ newdblTho2 = units[6] + " thousand "; }
                if(check[1] == 7){ newdblTho2 = units[7] + " thousand "; }
                if(check[1] == 8){ newdblTho2 = units[8] + " thousand "; }
                if(check[1] == 9){ newdblTho2 = units[9] + " thousand "; }
            }

            if(check[2] == 0){ newNumHundred = " ";}
            if(check[2] == 1){ newNumHundred = units[1] + " hundred "; }
            if(check[2] == 2){ newNumHundred = units[2] + " hundred "; }
            if(check[2] == 3){ newNumHundred = units[3] + " hundred "; }
            if(check[2] == 4){ newNumHundred = units[4] + " hundred "; }
            if(check[2] == 5){ newNumHundred = units[5] + " hundred "; }
            if(check[2] == 6){ newNumHundred = units[6] + " hundred "; }
            if(check[2] == 7){ newNumHundred = units[7] + " hundred "; }
            if(check[2] == 8){ newNumHundred = units[8] + " hundred "; }
            if(check[2] == 9){ newNumHundred = units[9] + " hundred "; }


            //Checking the tents
            if(check[3] == 1){

                var newDbl = check[3].concat(check[4])
                console.log(newDbl);
                
                if(newDbl >= 10 && newDbl <= 19){
                    newNumTent = units[newDbl];
                }

                var newNumLetter = newdblTho.concat(newdblTho2, newNumHundred, newNumTent);
                return newNumLetter;

            }

            if(check[3] == 2){ newNumTent = tents[0]; }
            if(check[3] == 3){ newNumTent = tents[1]; }
            if(check[3] == 4){ newNumTent = tents[2]; }
            if(check[3] == 5){ newNumTent = tents[3]; }
            if(check[3] == 6){ newNumTent = tents[4]; }
            if(check[3] == 7){ newNumTent = tents[5]; }
            if(check[3] == 8){ newNumTent = tents[6]; }
            if(check[3] == 9){ newNumTent = tents[7]; }

            if(check[4] == 0){ newNumUnit = units[0]; }
            if(check[4] == 1 ){ newNumUnit = units[1]; }
            if(check[4] == 2 ){ newNumUnit = units[2]; }
            if(check[4] == 3 ){ newNumUnit = units[3]; }
            if(check[4] == 4 ){ newNumUnit = units[4]; }
            if(check[4] == 5 ){ newNumUnit = units[5]; }
            if(check[4] == 6 ){ newNumUnit = units[6]; }
            if(check[4] == 7 ){ newNumUnit = units[7]; }
            if(check[4] == 8 ){ newNumUnit = units[8]; }
            if(check[4] == 9 ){ newNumUnit = units[9]; }

        }

        var newNumLetter = newdblTho.concat(newdblTho2, newNumHundred, newNumTent, newNumUnit);
        return newNumLetter;

    }




    //Enters if the number is between 100000 and 999999
    if (lengthNum == 6){
        
        var str = numStr;
        console.log("str: " + numStr);
        var check = str.split("");
        console.log(check);


        for(var i = 0; i < check.length; i++){

            if(check[0] == 1 || check[0] == 2 || check[0] == 3 || check[0] == 4 || check[0] == 5 || check[0] == 6 || check[0] == 7 || check[0] == 8 || check[0] == 9 ){
                if(check[0] == 1){ newHunTho = units[1] + " hundred "; }
                if(check[0] == 2){ newHunTho = units[2] + " hundred "; }
                if(check[0] == 3){ newHunTho = units[3] + " hundred "; }
                if(check[0] == 4){ newHunTho = units[4] + " hundred "; }
                if(check[0] == 5){ newHunTho = units[5] + " hundred "; }
                if(check[0] == 6){ newHunTho = units[6] + " hundred "; }
                if(check[0] == 7){ newHunTho = units[7] + " hundred "; }
                if(check[0] == 8){ newHunTho = units[8] + " hundred "; }
                if(check[0] == 9){ newHunTho = units[9] + " hundred "; }


                if(check[1] == 0 && check[2] == 0 && check[3] == 0 && check[4] == 0 && check[5] == 0){
                    return newHunTho + " thousand";
                }
            }

            if(check[1] == 1){
                var newdDubleTh = check[1].concat(check[2])
                console.log(newdDubleTh);
                
                if(newdDubleTh >= 10 && newdDubleTh <= 19){
                    newdblTho = units[newdDubleTh] + " thousand ";

                    if(check[2] == 0 && check[3] == 0 && check[4] == 0 && check[5] == 0){
                        
                        var finalLetter = newHunTho.concat(newdblTho);
                        return finalLetter;

                    }
                }

            }


            if(check[1] >= 2 && check[1] <= 9){
                
                if(check[1] == 2){ newdblTho = tents[0]; }
                if(check[1] == 3){ newdblTho = tents[1]; }
                if(check[1] == 4){ newdblTho = tents[2]; }
                if(check[1] == 5){ newdblTho = tents[3]; }
                if(check[1] == 6){ newdblTho = tents[4]; }
                if(check[1] == 7){ newdblTho = tents[5]; }
                if(check[1] == 8){ newdblTho = tents[6]; }
                if(check[1] == 9){ newdblTho = tents[7]; }

                if(check[2] == 0){ newdblTho2 = " thousand ";}
                if(check[2] == 1){ newdblTho2 = units[1] + " thousand "; }
                if(check[2] == 2){ newdblTho2 = units[2] + " thousand "; }
                if(check[2] == 3){ newdblTho2 = units[3] + " thousand "; }
                if(check[2] == 4){ newdblTho2 = units[4] + " thousand "; }
                if(check[2] == 5){ newdblTho2 = units[5] + " thousand "; }
                if(check[2] == 6){ newdblTho2 = units[6] + " thousand "; }
                if(check[2] == 7){ newdblTho2 = units[7] + " thousand "; }
                if(check[2] == 8){ newdblTho2 = units[8] + " thousand "; }
                if(check[2] == 9){ newdblTho2 = units[9] + " thousand "; }
            }

            if(check[3] == 0){ newNumHundred = " ";}
            if(check[3] == 1){ newNumHundred = units[1] + " hundred "; }
            if(check[3] == 2){ newNumHundred = units[2] + " hundred "; }
            if(check[3] == 3){ newNumHundred = units[3] + " hundred "; }
            if(check[3] == 4){ newNumHundred = units[4] + " hundred "; }
            if(check[3] == 5){ newNumHundred = units[5] + " hundred "; }
            if(check[3] == 6){ newNumHundred = units[6] + " hundred "; }
            if(check[3] == 7){ newNumHundred = units[7] + " hundred "; }
            if(check[3] == 8){ newNumHundred = units[8] + " hundred "; }
            if(check[3] == 9){ newNumHundred = units[9] + " hundred "; }


            //Checking the tents
            if(check[4] == 1){

                var newDbl = check[4].concat(check[5])
                console.log(newDbl);
                
                if(newDbl >= 10 && newDbl <= 19){
                    newNumTent = units[newDbl];
                }

                var newNumLetter = newHunTho.concat(newdblTho, newdblTho2, newNumHundred, newNumTent);
                return newNumLetter;

            }

            if(check[4] == 2){ newNumTent = tents[0]; }
            if(check[4] == 3){ newNumTent = tents[1]; }
            if(check[4] == 4){ newNumTent = tents[2]; }
            if(check[4] == 5){ newNumTent = tents[3]; }
            if(check[4] == 6){ newNumTent = tents[4]; }
            if(check[4] == 7){ newNumTent = tents[5]; }
            if(check[4] == 8){ newNumTent = tents[6]; }
            if(check[4] == 9){ newNumTent = tents[7]; }

            if(check[5] == 0){ newNumUnit = units[0]; }
            if(check[5] == 1 ){ newNumUnit = units[1]; }
            if(check[5] == 2 ){ newNumUnit = units[2]; }
            if(check[5] == 3 ){ newNumUnit = units[3]; }
            if(check[5] == 4 ){ newNumUnit = units[4]; }
            if(check[5] == 5 ){ newNumUnit = units[5]; }
            if(check[5] == 6 ){ newNumUnit = units[6]; }
            if(check[5] == 7 ){ newNumUnit = units[7]; }
            if(check[5] == 8 ){ newNumUnit = units[8]; }
            if(check[5] == 9 ){ newNumUnit = units[9]; }

        }
        var newNumLetter = newHunTho.concat(newdblTho, newdblTho2, newNumHundred, newNumTent, newNumUnit);
        return newNumLetter;

    }




    var singleMill = "";

        if (lengthNum == 7){
        
            var str = numStr;
            console.log("str: " + numStr);
            var check = str.split("");
            console.log(check);
    
    
            for(var i = 0; i < check.length; i++){
    
                if(check[0] == 1 || check[0] == 2 || check[0] == 3 || check[0] == 4 || check[0] == 5 || check[0] == 6 || check[0] == 7 || check[0] == 8 || check[0] == 9){
                    if(check[0] == 1){ singleMill = units[1] + " million "; }
                    if(check[0] == 2){ singleMill = units[2] + " million "; }
                    if(check[0] == 3){ singleMill = units[3] + " million "; }
                    if(check[0] == 4){ singleMill = units[4] + " million "; }
                    if(check[0] == 5){ singleMill = units[5] + " million "; }
                    if(check[0] == 6){ singleMill = units[6] + " million "; }
                    if(check[0] == 7){ singleMill = units[7] + " million "; }
                    if(check[0] == 8){ singleMill = units[8] + " million "; }
                    if(check[0] == 9){ singleMill = units[9] + " million "; }
    

                    if(check[1] == 0 && check[2] == 0 && check[3] == 0 && check[4] == 0 && check[5] == 0 && check[6] == 0 ){
                        return singleMill;
                    }

                }


                //hundred thousand
                if(check[1] == 1 || check[1] == 2 || check[1] == 3 || check[1] == 4 || check[1] == 5 || check[1] == 6 || check[1] == 7 || check[1] == 8 || check[1] == 9 ){
                    if(check[1] == 1){ newHunTho = units[1] + " hundred "; }
                    if(check[1] == 2){ newHunTho = units[2] + " hundred "; }
                    if(check[1] == 3){ newHunTho = units[3] + " hundred "; }
                    if(check[1] == 4){ newHunTho = units[4] + " hundred "; }
                    if(check[1] == 5){ newHunTho = units[5] + " hundred "; }
                    if(check[1] == 6){ newHunTho = units[6] + " hundred "; }
                    if(check[1] == 7){ newHunTho = units[7] + " hundred "; }
                    if(check[1] == 8){ newHunTho = units[8] + " hundred "; }
                    if(check[1] == 9){ newHunTho = units[9] + " hundred "; }
    
    
                    if(check[2] == 0 && check[3] == 0 && check[4] == 0 && check[5] == 0 && check[6] == 0){

                        return singleMill + newHunTho +" thousand";
                    }
                }
    
                if(check[2] == 1){
                    var newdDubleTh = check[2].concat(check[3])
                    console.log(newdDubleTh);
                    
                    if(newdDubleTh >= 10 && newdDubleTh <= 19){
                        newdblTho = units[newdDubleTh] + " thousand ";
    
                        if(check[4] == 0 && check[5] == 0 && check[6] == 0 ){
                            
                            return singleMill + newHunTho + newdblTho;
    
                        }
                    }
    
                }
                    
                if(check[2] == 2){ newdblTho = tents[0]; }
                if(check[2] == 3){ newdblTho = tents[1]; }
                if(check[2] == 4){ newdblTho = tents[2]; }
                if(check[2] == 5){ newdblTho = tents[3]; }
                if(check[2] == 6){ newdblTho = tents[4]; }
                if(check[2] == 7){ newdblTho = tents[5]; }
                if(check[2] == 8){ newdblTho = tents[6]; }
                if(check[2] == 9){ newdblTho = tents[7]; }

                if(check[3] == 0){ newdblTho2 = " thousand ";}
                if(check[3] == 1){ newdblTho2 = units[1] + " thousand "; }
                if(check[3] == 2){ newdblTho2 = units[2] + " thousand "; }
                if(check[3] == 3){ newdblTho2 = units[3] + " thousand "; }
                if(check[3] == 4){ newdblTho2 = units[4] + " thousand "; }
                if(check[3] == 5){ newdblTho2 = units[5] + " thousand "; }
                if(check[3] == 6){ newdblTho2 = units[6] + " thousand "; }
                if(check[3] == 7){ newdblTho2 = units[7] + " thousand "; }
                if(check[3] == 8){ newdblTho2 = units[8] + " thousand "; }
                if(check[3] == 9){ newdblTho2 = units[9] + " thousand "; }

    
                if(check[4] == 0){ newNumHundred = " ";}
                if(check[4] == 1){ newNumHundred = units[1] + " hundred "; }
                if(check[4] == 2){ newNumHundred = units[2] + " hundred "; }
                if(check[4] == 3){ newNumHundred = units[3] + " hundred "; }
                if(check[4] == 4){ newNumHundred = units[4] + " hundred "; }
                if(check[4] == 5){ newNumHundred = units[5] + " hundred "; }
                if(check[4] == 6){ newNumHundred = units[6] + " hundred "; }
                if(check[4] == 7){ newNumHundred = units[7] + " hundred "; }
                if(check[4] == 8){ newNumHundred = units[8] + " hundred "; }
                if(check[4] == 9){ newNumHundred = units[9] + " hundred "; }
    
    
                //Checking the tents
                if(check[5] == 1){
    
                    var newDbl = check[5].concat(check[6])
                    console.log(newDbl);
                    
                    if(newDbl >= 10 && newDbl <= 19){
                        newNumTent = units[newDbl];
                    }
    
                    return singleMill + newHunTho + newdblTho + newdblTho2 + newNumHundred + newNumTent;

                }
    
                if(check[5] == 2){ newNumTent = tents[0]; }
                if(check[5] == 3){ newNumTent = tents[1]; }
                if(check[5] == 4){ newNumTent = tents[2]; }
                if(check[5] == 5){ newNumTent = tents[3]; }
                if(check[5] == 6){ newNumTent = tents[4]; }
                if(check[5] == 7){ newNumTent = tents[5]; }
                if(check[5] == 8){ newNumTent = tents[6]; }
                if(check[5] == 9){ newNumTent = tents[7]; }
    
                if(check[6] == 0){ newNumUnit = units[0]; }
                if(check[6] == 1 ){ newNumUnit = units[1]; }
                if(check[6] == 2 ){ newNumUnit = units[2]; }
                if(check[6] == 3 ){ newNumUnit = units[3]; }
                if(check[6] == 4 ){ newNumUnit = units[4]; }
                if(check[6] == 5 ){ newNumUnit = units[5]; }
                if(check[6] == 6 ){ newNumUnit = units[6]; }
                if(check[6] == 7 ){ newNumUnit = units[7]; }
                if(check[6] == 8 ){ newNumUnit = units[8]; }
                if(check[6] == 9 ){ newNumUnit = units[9]; }
    
            }
            return singleMill + newHunTho + newdblTho + newdblTho2 + newNumHundred + newNumTent + newNumUnit;
    
        }







        var doubleMill = "";

            if (lengthNum == 8){
            
                var str = numStr;
                console.log("str: " + numStr);
                var check = str.split("");
                console.log(check);
        
        
                for(var i = 0; i < check.length; i++){


                    if(check[0] == 1 && (check[1] >= 1 && check[1] <= 9)){
                        var newdblMill = check[0].concat(check[1])
                        console.log(newdblMill);
                        
                        if(newdblMill >= 10 && newdblMill <= 19){
                            doubleMill = units[newdblMill] + " million ";
            
                            if(check[2] == 0 && check[3] == 0 && check[4] == 0 && check[5] == 0 && check[6] == 0 && check[7] == 0){
                                
                                return doubleMill;
            
                            }
                        }
            
                    }
            
                    //double digit mill
                        if(check[0] == 2){ doubleMill = tents[0]; }
                        if(check[0] == 3){ doubleMill = tents[1]; }
                        if(check[0] == 4){ doubleMill = tents[2]; }
                        if(check[0] == 5){ doubleMill = tents[3]; }
                        if(check[0] == 6){ doubleMill = tents[4]; }
                        if(check[0] == 7){ doubleMill = tents[5]; }
                        if(check[0] == 8){ doubleMill = tents[6]; }
                        if(check[0] == 9){ doubleMill = tents[7]; }

        
                    if(check[1] == 1 || check[1] == 2 || check[1] == 3 || check[1] == 4 || check[1] == 5 || check[1] == 6 || check[1] == 7 || check[1] == 8 || check[1] == 9){
                        if(check[1] == 1){ singleMill = units[1] + " million "; }
                        if(check[1] == 2){ singleMill = units[2] + " million "; }
                        if(check[1] == 3){ singleMill = units[3] + " million "; }
                        if(check[1] == 4){ singleMill = units[4] + " million "; }
                        if(check[1] == 5){ singleMill = units[5] + " million "; }
                        if(check[1] == 6){ singleMill = units[6] + " million "; }
                        if(check[1] == 7){ singleMill = units[7] + " million "; }
                        if(check[1] == 8){ singleMill = units[8] + " million "; }
                        if(check[1] == 9){ singleMill = units[9] + " million "; }
        
    
                        if(check[2] == 0 && check[3] == 0 && check[4] == 0 && check[5] == 0 && check[6] == 0 && check[7] == 0 ){
                            return doubleMill + singleMill;
                        }
    
                    }
    
    
                    //hundred thousand
                    if(check[2] == 1 || check[2] == 2 || check[2] == 3 || check[2] == 4 || check[2] == 5 || check[2] == 6 || check[2] == 7 || check[2] == 8 || check[2] == 9 ){
                        if(check[2] == 1){ newHunTho = units[1] + " hundred "; }
                        if(check[2] == 2){ newHunTho = units[2] + " hundred "; }
                        if(check[2] == 3){ newHunTho = units[3] + " hundred "; }
                        if(check[2] == 4){ newHunTho = units[4] + " hundred "; }
                        if(check[2] == 5){ newHunTho = units[5] + " hundred "; }
                        if(check[2] == 6){ newHunTho = units[6] + " hundred "; }
                        if(check[2] == 7){ newHunTho = units[7] + " hundred "; }
                        if(check[2] == 8){ newHunTho = units[8] + " hundred "; }
                        if(check[2] == 9){ newHunTho = units[9] + " hundred "; }
        
        
                        if(check[3] == 0 && check[4] == 0 && check[5] == 0 && check[6] == 0 && check[7] == 0){
    
                            return doubleMill + singleMill + newHunTho +" thousand";
                        }
                    }
        
                    if(check[3] == 1){
                        var newdDubleTh = check[3].concat(check[4])
                        console.log(newdDubleTh);
                        
                        if(newdDubleTh >= 10 && newdDubleTh <= 19){
                            newdblTho = units[newdDubleTh] + " thousand ";
        
                            if(check[5] == 0 && check[6] == 0 && check[7] == 0 ){
                                
                                return doubleMill + singleMill + newHunTho + newdblTho;
        
                            }
                        }
        
                    }
                        
                    if(check[3] == 2){ newdblTho = tents[0]; }
                    if(check[3] == 3){ newdblTho = tents[1]; }
                    if(check[3] == 4){ newdblTho = tents[2]; }
                    if(check[3] == 5){ newdblTho = tents[3]; }
                    if(check[3] == 6){ newdblTho = tents[4]; }
                    if(check[3] == 7){ newdblTho = tents[5]; }
                    if(check[3] == 8){ newdblTho = tents[6]; }
                    if(check[3] == 9){ newdblTho = tents[7]; }
    
                    if(check[4] == 0){ newdblTho2 = " thousand ";}
                    if(check[4] == 1){ newdblTho2 = units[1] + " thousand "; }
                    if(check[4] == 2){ newdblTho2 = units[2] + " thousand "; }
                    if(check[4] == 3){ newdblTho2 = units[3] + " thousand "; }
                    if(check[4] == 4){ newdblTho2 = units[4] + " thousand "; }
                    if(check[4] == 5){ newdblTho2 = units[5] + " thousand "; }
                    if(check[4] == 6){ newdblTho2 = units[6] + " thousand "; }
                    if(check[4] == 7){ newdblTho2 = units[7] + " thousand "; }
                    if(check[4] == 8){ newdblTho2 = units[8] + " thousand "; }
                    if(check[4] == 9){ newdblTho2 = units[9] + " thousand "; }
    
        
                    if(check[5] == 0){ newNumHundred = " ";}
                    if(check[5] == 1){ newNumHundred = units[1] + " hundred "; }
                    if(check[5] == 2){ newNumHundred = units[2] + " hundred "; }
                    if(check[5] == 3){ newNumHundred = units[3] + " hundred "; }
                    if(check[5] == 4){ newNumHundred = units[4] + " hundred "; }
                    if(check[5] == 5){ newNumHundred = units[5] + " hundred "; }
                    if(check[5] == 6){ newNumHundred = units[6] + " hundred "; }
                    if(check[5] == 7){ newNumHundred = units[7] + " hundred "; }
                    if(check[5] == 8){ newNumHundred = units[8] + " hundred "; }
                    if(check[5] == 9){ newNumHundred = units[9] + " hundred "; }
        
        
                    //Checking the tents
                    if(check[6] == 1){
        
                        var newDbl = check[6].concat(check[7])
                        console.log(newDbl);
                        
                        if(newDbl >= 10 && newDbl <= 19){
                            newNumTent = units[newDbl];
                        }
        
                        return doubleMill + singleMill + newHunTho + newdblTho + newdblTho2 + newNumHundred + newNumTent;
    
                    }
        
                    if(check[6] == 2){ newNumTent = tents[0]; }
                    if(check[6] == 3){ newNumTent = tents[1]; }
                    if(check[6] == 4){ newNumTent = tents[2]; }
                    if(check[6] == 5){ newNumTent = tents[3]; }
                    if(check[6] == 6){ newNumTent = tents[4]; }
                    if(check[6] == 7){ newNumTent = tents[5]; }
                    if(check[6] == 8){ newNumTent = tents[6]; }
                    if(check[6] == 9){ newNumTent = tents[7]; }
        
                    if(check[7] == 0){ newNumUnit = units[0]; }
                    if(check[7] == 1 ){ newNumUnit = units[1]; }
                    if(check[7] == 2 ){ newNumUnit = units[2]; }
                    if(check[7] == 3 ){ newNumUnit = units[3]; }
                    if(check[7] == 4 ){ newNumUnit = units[4]; }
                    if(check[7] == 5 ){ newNumUnit = units[5]; }
                    if(check[7] == 6 ){ newNumUnit = units[6]; }
                    if(check[7] == 7 ){ newNumUnit = units[7]; }
                    if(check[7] == 8 ){ newNumUnit = units[8]; }
                    if(check[7] == 9 ){ newNumUnit = units[9]; }
        
                }
                return doubleMill + singleMill + newHunTho + newdblTho + newdblTho2 + newNumHundred + newNumTent + newNumUnit;
        
            }
    
    




}

var especialNumber = 22569345;
var numLetters = valueInLetters(especialNumber);
console.log(especialNumber + " in letters is: " + numLetters);