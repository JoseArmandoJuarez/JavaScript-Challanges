

function candyRatings(numbers){

    console.log(numbers);
    var len = numbers.length;
    var result = 0;

    if (len == 1){
        return 1;
    }

    for (var i = 0; i < len; i++) {

        if (i == len - 1) {
            if (numbers[i] > numbers[i-1]) {
                result += 1;
            }
        }

        if (numbers[0] < numbers[1]) {
            result += 1;
        }

        if (numbers[i] > numbers[i+1]) {
            result += 1;
        }

        if (numbers[i] > numbers[i-1]) {
            result += 1;
        }

        if (numbers[i] == numbers[i-1]) {
            result += 1;
        }
        
        if (numbers[i] == numbers[i+1]) {
            result += 1;
        }

    }

    return result;

}

 var arr = [4, 6, 4, 5, 6, 2];
//var arr = [3, 1, 2, 2];
var total = candyRatings(arr);
console.log("Total: " + total);