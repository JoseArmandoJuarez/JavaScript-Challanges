

function greadyFlorist(k, n) {

    var numFriends = k;
    var total = 0;
    var currentPurchase = 0
    var friendNum = 0;



    for (var i = n.length - 1; i >= 0; i--) {

        console.log(n[i]);

        total += (currentPurchase + 1) * n[i];
        friendNum++;

        console.log("....................................");
        console.log("friendNumber: " + friendNum);
        console.log("flowers bought: " + currentPurchase);
        console.log("total: " + total);


        if (friendNum == numFriends) {
            friendNum = 0;
            currentPurchase++;
        }
    }



    return total;





}

//var k = 3; //friends
//var n = [1, 2, 3, 4]; //number of flowers

var k = 2; //friends
var n = [1,3,5,7,9]; //number of flowers


var totalPrice = greadyFlorist(k, n);
console.log("Total: " + totalPrice);



