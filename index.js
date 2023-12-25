

var arr = [3, 4, 5, 6, 7];

var output = "";

arr.forEach(function(element) {

    if (element % 2 !== 0) {
        
        if (output !== "") {
            output += " - ";
        }
        output += element;
    }
});

console.log("Output ==> " + output);
