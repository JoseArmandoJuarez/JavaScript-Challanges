

var n = 3; //size of square 

var last = n * n; //3 x 3
var a = []; 

//creating the rows []
for (var m = 0; m < n; m++){
    a[m] = [];
    console.log(m);
}


var i = 0;
var j = Math.floor(n / 2);;
console.log("j: "+j);

for (var c = 1; c <= last; c++) {
    if (i < 0) {
        i = n - (-i);
        console.log("i less: "+i);
    }

    if (i >= n) {
        i = i - n;
        console.log("i greater: "+i);
    }
    
    if (j < 0) {
        j = n - (-j);
        console.log("j less: "+j);
    }

    if (j >= n) {
        j = j - n;
        console.log("j greater: "+j);
    }

    a[i][j] = c; //matrix [1, 2, 3], [4, 5, 6], [7, 8, 9] ....
    console.log(a[i][j] = c);


    if (c % n == 0) { //if 3 or 6 or 9 then move to a new row
        i++;
    }
    else {
        i--;
        j++;
    }

}

for (k = 0; k < n; k++) {

        console.log(a[k]); 

}