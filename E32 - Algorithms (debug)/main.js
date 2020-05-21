function shellSort(arr) { //parameter arr holds [3, 0, 2, 5, -1, 4, 1]

    //deviding the length of arr by 2 and passing the value to the variable increment
    var increment = arr.length / 2; // 7 / 2 = 3.5

    while (increment > 0) { //if increment is greater than 0 go tru the while loop

        
        for (i = increment; i < arr.length; i++) {
            var j = i; //passing the value of i to j
            var temp = arr[i]; // passing the index value to temp
    
            //checking if both are  true if not it does not go tru the loop
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment]; 
                j = j - increment;
            }
            
            arr[j] = temp;// value of temp is given to the index value
        }
    
        //if increment = 2 then go tru the if  else execute the following...
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);//mulitply the value of increment by 5 then devide by 11
        }
    }
  return arr; //return arr to console.log(shellSort([-1, 0, 1, 2, 3, 4, 5,]));
}

            //passes this numbers to the parameter called arr at the function shellSort(arr)
console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));










// function quick_Sort(origArray) {
//  	if (origArray.length <= 1) { //if the length of the array is less than 1 or equal 1 then enter if statement
//  		return origArray; //return origArray;
//     } 
//     else {

//  		var left = [];
//  		var right = [];
//  		var newArray = [];
//  		var pivot = origArray.pop(); //pops last index and gives it to pivot
//  		var length = origArray.length;//the length of array is given to length;

//  		for (var i = 0; i < length; i++) {
//  			if (origArray[i] <= pivot) {
//  				left.push(origArray[i]);
// 			} else {
// 				right.push(origArray[i]);
// 			}
// 		}

// 		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
//     }
// }

// var myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);