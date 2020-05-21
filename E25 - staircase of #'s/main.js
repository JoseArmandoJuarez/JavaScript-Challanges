
function main() {
    var n = 6;
    var space = null;
    var hash = null;
    var stairCase = null;

    for (var i = 0; i < n; i++){
        space = n - i;
        //console.log("spaces: "+space)

        hash = i + 1;
        //console.log("hashtags: " + hash);

        
        stairCase = ' '.repeat(space) + '#'.repeat(hash);   
        console.log(stairCase); 
    }  
}

main();